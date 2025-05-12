import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@apis", replacement: path.resolve(__dirname, "src/apis") },
      { find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@constants",
        replacement: path.resolve(__dirname, "src/constants"),
      },
      { find: "@hooks", replacement: path.resolve(__dirname, "src/hooks") },
      { find: "@layouts", replacement: path.resolve(__dirname, "src/layouts") },
      { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
      { find: "@routes", replacement: path.resolve(__dirname, "src/routes") },
      { find: "@utils", replacement: path.resolve(__dirname, "src/utils") },
    ],
  },
});
