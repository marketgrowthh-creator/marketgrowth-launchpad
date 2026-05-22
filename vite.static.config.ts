// Static build config for GitHub Pages.
// This is INDEPENDENT from the Lovable TanStack Start config (vite.config.ts).
// Run with: bun run build:static
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

const REPO = "marketgrowth-launchpad";

export default defineConfig({
  base: `/${REPO}/`,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist-static",
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),
    },
  },
});
