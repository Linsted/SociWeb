module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      'node': {
        'paths': ['src'],
        'extensions': ['.js', '.ts', '.d.ts', '.tsx']
      },
    },
  },
  rules: {
    "no-param-reassign": [2, { "props": false }]
  },
};
