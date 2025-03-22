
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/realestate/" : "/", // ✅ Dynamically sets base
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist", // ✅ Ensures output goes to the correct folder
    assetsDir: "assets", // ✅ Keeps assets organized
    rollupOptions: {
      // Ensure that all routes work with direct navigation
      output: {
        manualChunks: undefined,
      },
    },
  },
}));
