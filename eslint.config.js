import path from "path";
import { fileURLToPath } from "url";
import js from "@eslint/js";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";

// https://stackoverflow.com/questions/72456535/referenceerror-dirname-is-not-defined-in-es-module-scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  {
    // https://eslint.org/docs/latest/use/configure/configuration-files-new#globally-ignoring-files-with-ignores
    ignores: [".cache/", ".wrangler/", "public/build/", "functions/"],
  },
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.cjs"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.commonjs,
      },
    },
  },
  {
    files: ["ui/**/*.ts", "ui/**/*.tsx"],
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: true,
        tsconfigRootDir: path.join(__dirname, "ui"),
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es6,
      },
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      react: reactPlugin,
      "jsx-a11y": jsxA11yPlugin,
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      // https://stackoverflow.com/questions/74237042/how-to-correctly-configure-the-parser-plugins-with-eslints-new-flat-config
      ...js.configs.recommended.rules,
      // https://typescript-eslint.io/linting/configs/#eslint-recommended
      // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
      // Pulling these in by hand since eslint flat config does not.
      "constructor-super": "off", // ts(2335) & ts(2377)
      "getter-return": "off", // ts(2378)
      "no-const-assign": "off", // ts(2588)
      "no-dupe-args": "off", // ts(2300)
      "no-dupe-class-members": "off", // ts(2393) & ts(2300)
      "no-dupe-keys": "off", // ts(1117)
      "no-func-assign": "off", // ts(2539)
      "no-import-assign": "off", // ts(2539) & ts(2540)
      "no-new-symbol": "off", // ts(7009)
      "no-obj-calls": "off", // ts(2349)
      "no-redeclare": "off", // ts(2451)
      "no-setter-return": "off", // ts(2408)
      "no-this-before-super": "off", // ts(2376)
      "no-undef": "off", // ts(2304)
      "no-unreachable": "off", // ts(7027)
      "no-unsafe-negation": "off", // ts(2365) & ts(2360) & ts(2358)
      "no-var": "error", // ts transpiles let/const to var, so no need for vars any more
      "prefer-const": "error", // ts provides better types with const
      "prefer-rest-params": "error", // ts provides better types with rest args over arguments
      "prefer-spread": "error", // ts transpiles spread to apply, so no need for manual apply

      ...typescriptPlugin.configs["strict-type-checked"].rules,
      ...typescriptPlugin.configs["stylistic-type-checked"].rules,
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      // https://typescript-eslint.io/rules/no-throw-literal/
      "no-throw-literal": "off",
      "@typescript-eslint/no-throw-literal": "error",
      // https://typescript-eslint.io/rules/consistent-type-definitions/
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],

      ...reactPlugin.configs["recommended"].rules,
      // https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
      ...reactPlugin.configs["jsx-runtime"].rules, // after recommended since disables couple rules

      ...jsxA11yPlugin.configs["recommended"].rules,
      "jsx-a11y/media-has-caption": "off",

      ...reactHooksPlugin.configs["recommended"].rules,
      "react-hooks/exhaustive-deps": "error",
    },
  },
];
