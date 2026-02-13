// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { copyFileSync, readdirSync, statSync, existsSync } from "fs";
import { join } from "path";
function customPublicCopy() {
  return {
    name: "custom-public-copy",
    closeBundle() {
      const publicDir = "public";
      const outDir = "dist";
      if (existsSync(publicDir)) {
        const files = readdirSync(publicDir);
        files.forEach((file) => {
          if (file.includes("copy")) return;
          try {
            const srcPath = join(publicDir, file);
            const destPath = join(outDir, file);
            if (statSync(srcPath).isFile()) {
              copyFileSync(srcPath, destPath);
            }
          } catch (err) {
            console.warn(`Could not copy ${file}:`, err.message);
          }
        });
      }
    }
  };
}
var vite_config_default = defineConfig({
  plugins: [react(), customPublicCopy()],
  optimizeDeps: {
    exclude: ["lucide-react"]
  },
  publicDir: false
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgeyBjb3B5RmlsZVN5bmMsIHJlYWRkaXJTeW5jLCBzdGF0U3luYywgbWtkaXJTeW5jLCBleGlzdHNTeW5jIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xuXG5mdW5jdGlvbiBjdXN0b21QdWJsaWNDb3B5KCkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdjdXN0b20tcHVibGljLWNvcHknLFxuICAgIGNsb3NlQnVuZGxlKCkge1xuICAgICAgY29uc3QgcHVibGljRGlyID0gJ3B1YmxpYyc7XG4gICAgICBjb25zdCBvdXREaXIgPSAnZGlzdCc7XG5cbiAgICAgIGlmIChleGlzdHNTeW5jKHB1YmxpY0RpcikpIHtcbiAgICAgICAgY29uc3QgZmlsZXMgPSByZWFkZGlyU3luYyhwdWJsaWNEaXIpO1xuICAgICAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgICAgIGlmIChmaWxlLmluY2x1ZGVzKCdjb3B5JykpIHJldHVybjtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBzcmNQYXRoID0gam9pbihwdWJsaWNEaXIsIGZpbGUpO1xuICAgICAgICAgICAgY29uc3QgZGVzdFBhdGggPSBqb2luKG91dERpciwgZmlsZSk7XG5cbiAgICAgICAgICAgIGlmIChzdGF0U3luYyhzcmNQYXRoKS5pc0ZpbGUoKSkge1xuICAgICAgICAgICAgICBjb3B5RmlsZVN5bmMoc3JjUGF0aCwgZGVzdFBhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBDb3VsZCBub3QgY29weSAke2ZpbGV9OmAsIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCksIGN1c3RvbVB1YmxpY0NvcHkoKV0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGV4Y2x1ZGU6IFsnbHVjaWRlLXJlYWN0J10sXG4gIH0sXG4gIHB1YmxpY0RpcjogZmFsc2UsXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU4sU0FBUyxvQkFBb0I7QUFDdFAsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsY0FBYyxhQUFhLFVBQXFCLGtCQUFrQjtBQUMzRSxTQUFTLFlBQVk7QUFFckIsU0FBUyxtQkFBbUI7QUFDMUIsU0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sY0FBYztBQUNaLFlBQU0sWUFBWTtBQUNsQixZQUFNLFNBQVM7QUFFZixVQUFJLFdBQVcsU0FBUyxHQUFHO0FBQ3pCLGNBQU0sUUFBUSxZQUFZLFNBQVM7QUFDbkMsY0FBTSxRQUFRLFVBQVE7QUFDcEIsY0FBSSxLQUFLLFNBQVMsTUFBTSxFQUFHO0FBRTNCLGNBQUk7QUFDRixrQkFBTSxVQUFVLEtBQUssV0FBVyxJQUFJO0FBQ3BDLGtCQUFNLFdBQVcsS0FBSyxRQUFRLElBQUk7QUFFbEMsZ0JBQUksU0FBUyxPQUFPLEVBQUUsT0FBTyxHQUFHO0FBQzlCLDJCQUFhLFNBQVMsUUFBUTtBQUFBLFlBQ2hDO0FBQUEsVUFDRixTQUFTLEtBQUs7QUFDWixvQkFBUSxLQUFLLGtCQUFrQixJQUFJLEtBQUssSUFBSSxPQUFPO0FBQUEsVUFDckQ7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUVBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLENBQUM7QUFBQSxFQUNyQyxjQUFjO0FBQUEsSUFDWixTQUFTLENBQUMsY0FBYztBQUFBLEVBQzFCO0FBQUEsRUFDQSxXQUFXO0FBQ2IsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
