const {
    defineConfig,
} = require("eslint/config");

const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = defineConfig([{
    extends: compat.extends(
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/eslint-config-prettier/skip-formatting",
    ),

    languageOptions: {
        ecmaVersion: "latest",
        parserOptions: {},
    },
}]);
