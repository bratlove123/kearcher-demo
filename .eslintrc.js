module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  env: {
    node: true,
    es2020: true,
  },
  plugins: ['jest'],
  extends: ['eslint:recommended', 'plugin:jest/recommended', 'plugin:jest/style', 'prettier'],
  rules: {
    'no-console': ['error'],
    'jest/prefer-expect-assertions': [
      'error',
      {
        onlyFunctionsWithAsyncKeyword: true,
      },
    ],
  },
  ignorePatterns: ['**/coverage/', '**/node_modules/', '**/dist/'],
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'jest'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:jest/style',
        'prettier',
      ],
    },
  ],
};
