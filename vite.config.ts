import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Libera qualquer link do ngrok (o subdomínio muda a cada vez que o túnel abre).
const hostsNgrok = [".ngrok-free.app", ".ngrok.app", ".ngrok.io"];

export default defineConfig({
  plugins: [react()],
  server: { allowedHosts: hostsNgrok },
  preview: { allowedHosts: hostsNgrok },
});
