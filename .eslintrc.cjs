module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: {
    options: "@typescript-eslint/parser",
    project: "./tsconfig.json",
  },

  plugins: ["react-refresh"],
  rules: {
    "react/prop-types": "off",

    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },

    ],
    "react/react-in-jsx-scope": "off",

  },
};
