import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    // 대괄호 하나만 사용
    react(),
    tailwindcss(),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  build: {
    rollupOptions: {
      input: "./src/main.jsx",
    },
  },
});
