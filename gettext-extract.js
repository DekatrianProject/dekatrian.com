const { GettextExtractor, JsExtractors } = require('gettext-extractor');

const extractor = new GettextExtractor();

extractor
  .createJsParser([
    JsExtractors.callExpression(['$t', '[this].translations.get'], {
      arguments: {
        text: 0,
        context: 1,
      },
    }),
    JsExtractors.callExpression('[this].translations.plural', {
      arguments: {
        text: 1,
        textPlural: 2,
        context: 3,
      },
    }),
  ])
  .parseFilesGlob('./{components,pages,layouts,templates}/**/*.vue');

extractor.savePotFile('./i18n/messages.pot');

extractor.printStats();
