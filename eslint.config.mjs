import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  globalIgnores([".next/**", "out/**", "node_modules/**", "convex/_generated/**"]),
  {
    files: ["src/imports/**/*.{ts,tsx}"],
    rules: {
      "@next/next/no-img-element": "off",
      "import/no-anonymous-default-export": "off",
    },
  },
  {
    files: ["postcss.config.mjs"],
    rules: {
      "import/no-anonymous-default-export": "off",
    },
  },
]);
