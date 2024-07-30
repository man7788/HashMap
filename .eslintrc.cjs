module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
    "no-plusplus": "off",
    "no-use-before-define": "off",
    "import/extensions": [
      "error",
      {
        js: "ignorePackages",
      },
    ],
    "no-unused-vars": "warn",
    "func-names": "off",
    "no-param-reassign": ["error", { props: false }],
    "consistent-return": "off",
    radix: "off",
  },
};
