// @ts-check
import base from "../../eslint.config.js";
import { defineConfig } from "eslint/config";

export default defineConfig(base, {
  rules: {
    "@typescript-eslint/no-namespace": "off",
  },
});
