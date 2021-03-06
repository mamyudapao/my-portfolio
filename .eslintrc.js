/* eslint-disable no-undef */
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "google",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        "require-jsdoc": "off",
        "react/react-in-jsx-scope": "off",
        "no-console": "error",
        "import/no-unresolved": "off",
        "import/extensions": "off",
    },
};