const chalk = require('chalk');
const path = require('path');
const express = require('express');
const beautify = require('js-beautify').html;
const _ = require('lodash');

let config;
if (process.env.NODE_ENV == "production") {
  config = require('../discovery/prod-config');
} else {
  config = require('../discovery/config');
}

const components = require('../discovery/components');
const docs = require('../discovery/docs');
const paths = require('../paths');
const locals = require('../templates/locals');
const errors = require('../util/errors');

const app = express();

app.use(express.static(paths.compiled.path));
app.set('view engine', 'pug');
app.set('views', [
  path.join(process.cwd(), './content/templates'),
  path.join(process.cwd(), './core/templates')
]);

function renderView(req, res, viewName, customLocals) {
  const viewLocals = Object.assign({}, locals.getDefaultLocals(), {docs: docs.discover()}, customLocals);
  viewLocals.locals = Object.assign({}, locals.getDefaultLocals(), {docs: docs.discover()}, customLocals);
  const appErrors = errors.getErrors();

  if (Object.keys(appErrors).length > 0) {
    res.render('error', Object.assign({}, { errors: appErrors }));
  } else {
    app.render(viewName, viewLocals, function (err, html) {
      if (err) {
        if (err.message.includes('Failed to lookup view')) {
          res.render('404', viewLocals);
        } else {
          res.send(`<pre>${err}</pre>`);
        }
      } else {
        html = beautify(html, config.prettify);

        res.send(html);
      }
    });
  }
}

module.exports = function (done) {

  app.get('/development/docs/:group', function (req, res) {
    const componentGroups = components.discover();
    const componentGroup = req.params.group.replace('.html', '');

    renderView(req, res, 'styleguide/component-group', {
      pathname: req.path.replace('/', '').replace('.html', ''),
      componentGroup: componentGroups.byGroup[componentGroup]
    });
  });

  app.get('*', function (req, res) {
    if (req.path.includes('.html') || req.path === '/') {
      const viewName = req.path.replace('/', '').replace('.html', '');
      renderView(req, res, viewName, {
        pathname: viewName,
        moment: require('moment'),
        marked: require('marked')
      });
    } else {
      res.sendFile(path.join(__dirname, paths.compiled.path, req.path), function () {
        console.log(`${chalk.red('The file')} ${chalk.red.bold(req.path)} ${chalk.red('does not exist.')}`);
        console.log(`\tRequested from ${chalk.bold(req.header('Referer'))}`);
        res.sendStatus(404);
      });
    }
  });

  app.listen(config.express.port, function () {
    console.log(`Express server listening on port ${config.express.port}`);
    done();
  });
};
