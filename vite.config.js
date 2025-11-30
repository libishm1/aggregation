import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Use repo subpath for GitHub Pages; keep dev at root.
  base: process.env.NODE_ENV === "production" ? "/aggregation/" : "/",
  plugins: [react()],
});
