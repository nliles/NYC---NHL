import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { patchCssModules } from "vite-css-modules";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [patchCssModules(), react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/_colors.scss";`,
      },
    },
  },
});
