/** @type import('prettier').Options */
const options = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  semi: true,
  trailingComma: 'none',
  bracketSpacing: true,
  arrowParens: 'always',
  importOrder: ['^[./]'],
  importOrderSeparation: true
};

module.exports = options;
