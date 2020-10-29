const stylelint = require('stylelint');
const config = require('../');

const errorsExpected = 12;

test('flags stylelint errors', () => (
  stylelint.lint({
    files: 'example/*.css',
    config
  }).then(data => expect(data.results[0].warnings).toHaveLength(errorsExpected))
));
