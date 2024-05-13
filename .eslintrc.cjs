module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    "airbnb",
    "airbnb-base",
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "eslint:all",
    "plugin:react/all",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: { react: { version: "detect" } },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
