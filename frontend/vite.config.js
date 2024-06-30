import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // This is how we set web proxies
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        // remove /api prefix when proxying
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [react()],
});
