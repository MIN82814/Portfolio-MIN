import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // 💡 關鍵設定 1：叫 Sass 編譯器不要檢查 node_modules（像是 Bootstrap 的舊語法）
        quietDeps: true,
        // 💡 關鍵設定 2：針對新版 Sass 1.80+ 的特定過期語法進行靜音
        silenceDeprecations: [
          "import",
          "global-builtin",
          "if-function",
          "color-functions",
        ],
      },
    },
  },
});
