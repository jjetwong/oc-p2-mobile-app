// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        public: resolve(__dirname, "public/menu-1.html"),
        public: resolve(__dirname, "public/menu-2.html"),
        public: resolve(__dirname, "public/menu-3.html"),
        public: resolve(__dirname, "public/menu-4.html"),
      },
    },
  },
});
