// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        menu1: resolve(__dirname, "public/menu-1.html"),
        menu2: resolve(__dirname, "public/menu-2.html"),
        menu3: resolve(__dirname, "public/menu-3.html"),
        menu4: resolve(__dirname, "public/menu-4.html"),
      },
    },
  },
});
