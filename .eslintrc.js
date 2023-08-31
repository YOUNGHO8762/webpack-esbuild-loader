module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["prettier", "import", "jsx-a11y", "react"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    "func-names": 0,
    "no-undef": 0,
    "no-plusplus": 0,
    "no-console": 0,
    "no-use-before-define": 0,
    "no-restricted-syntax": 0,
    "no-unused-vars": 0,
    "react/react-in-jsx-scope": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/function-component-definition": 0,
    "react/jsx-props-no-spreading": 0,
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
    },
  ],
  ignorePatterns: ["node_modules/**", "dist/**", "*.css", "*.scss"],
  settings: {
    react: {
      version: "detect",
    },
  },
};
