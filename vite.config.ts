import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { patchCssModules } from "vite-css-modules";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [patchCssModules(), react()],
  server: {
    proxy: {
      '/api/nypl': {
        target: 'https://api.repo.nypl.org',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/nypl/, ''),
      }
    }
  }
});
