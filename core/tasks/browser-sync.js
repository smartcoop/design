const browserSync = require('browser-sync');
const path = require('path');

const config = require('../discovery/config');
const paths = require('../paths');

module.exports = function () {
  return browserSync.init({
    files: [
      path.join(paths.compiled.path, '**/*'),
      '!**/*.map',
      paths.content.templates.all,
      './core/templates/**/*.pug',
      paths.content.scss.colorsDefinition,
      paths.content.templates.data,
      paths.content.docs,
    ],
    ui: false,
    ghostMode: false,
    notify: false,
    proxy: `localhost:${config.express.port}`
  });
};
