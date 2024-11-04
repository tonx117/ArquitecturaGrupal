import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server:{
    port: 5173,
    host: true,
    watch:{
      usePolling: true
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Alias para la carpeta src
      "@public": path.resolve(__dirname, "public"), // Alias para la carpeta public
    },
  },
});
