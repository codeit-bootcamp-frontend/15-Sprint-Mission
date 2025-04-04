import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // 이 라인 추가
  },
  build: {
    rollupOptions: {
      input: "/src/main.jsx", // 기본 진입점 확인
    },
  },
});
