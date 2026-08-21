import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000, //local server
  },

  preview: {
    host: "0.0.0.0",
    port: 8080, //production server
    allowedHosts: ["mellow-possibility-production-d2f6.up.railway.app"],
  },
});
