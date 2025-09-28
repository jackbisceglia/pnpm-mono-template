// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier/flat"; // disable format lint rules

import { defineConfig } from "eslint/config";

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  eslintConfigPrettier,
  {
    // if we need to lint the config, then we need a dedicated eslint tsconfig
    // otherwise there's a circular dependency of the tsconfig and the eslint config
    ignores: ["**/eslint.config.js"],
  },
  {
    languageOptions: {
      parserOptions: {
        project: true, // tells ts-eslint to look for closest tsconfig.json file
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/no-namespace": "off", // allow namespaces

      "@typescript-eslint/consistent-type-definitions": ["error", "type"], // prefer type over interface
      "no-unused-vars": "off", // allow _ prefixed unused vars to avoid linting errors
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
);
