import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import i18nResources from "vite-plugin-i18n-resources";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({ exportAsDefault: true }),
    i18nResources({
      path: resolve(__dirname, "build/locales"),
    }),
  ],
  define: {
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify("http://localhost:8000"),
    __PROJECT__: JSON.stringify("frontend"),
  },
  css: {
    modules: {
      generateScopedName: "[path][name]__[local]--[hash:base64:5]",
    },
  },
});
