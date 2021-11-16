/**
 * Bedrock configuration
 * For docs, see https://bedrockapp.org/documentation/configuration/
 * Inline docs available in the default config object
*/

module.exports = {
  pageTree: false,
  js: {
    minify: false
  },
  css: {
    compiler: 'scss',
    minify: false,
    purge: false
  },
  styleguide: {
    url: '/development/docs',
    pageTitle: 'Component documentation',
    search: true,
    colors: './content/scss/_s-colors.scss',
    categoryOrder: [
      'Style guide',
      'Design patterns',
      'Components',
      'Objects',
      'Development documentation'
    ],
    componentCategories: {
      aov: 'Basics',
      c: 'Components',
      o: 'Objects',
      u: 'Utilities'
    },
    codeSamples: {
      jsx: false
    },
  },
};
