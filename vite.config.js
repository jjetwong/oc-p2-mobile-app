// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        public: resolve(__dirname, "public/menu-1.html", "public/menu-2.html"),
      },
    },
  },
});
