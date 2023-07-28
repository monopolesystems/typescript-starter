module.exports = {
  env: {
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    // "plugin:functional/external-typescript-recommended",
    // "plugin:functional/recommended",
    // "plugin:functional/stylistic"
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  settings: {
    'import/resolver': {
      "node": {
          "extensions": [".js", ".jsx", ".ts", ".tsx"]
        }
      }
  },
  plugins: ['@typescript-eslint', 'jest', 'functional', 'only-warn'],
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    "arrow-body-style": ['error', 'as-needed'],
    "import/no-unresolved": "off",
    "no-else-return": [ "warn"],
    "no-multiple-empty-lines": ["warn", {max: 1}],
    "@typescript-eslint/member-ordering": "warn",
    "no-useless-rename": "warn",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/filename-case":"off",
    "unicorn/no-null":"off",
    "newline-per-chained-call": ["warn", {ignoreChainWithDepth: 2}],
    "unicorn/prefer-top-level-await": ["off"],
    "no-console": "warn",
    "unicorn/prefer-string-replace-all": "off",
    "curly": [ "warn", "multi"]
  },
}
