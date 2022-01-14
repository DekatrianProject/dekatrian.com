/* eslint-env es6, node */

module.exports = {
  '*.{js,ts,vue}': 'eslint --cache',
  '*.{css,scss,sass,html,vue}': 'stylelint',
  '*.**': 'prettier --check --ignore-unknown',
};
