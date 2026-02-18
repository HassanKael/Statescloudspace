// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { copyFileSync, readdirSync, statSync, mkdirSync, existsSync } from "fs";
import { join } from "path";
function customPublicCopy() {
  return {
    name: "custom-public-copy",
    closeBundle() {
      const publicDir = "public";
      const outDir = "dist";
      function copyRecursive(src, dest) {
        if (statSync(src).isDirectory()) {
          if (!existsSync(dest)) {
            mkdirSync(dest, { recursive: true });
          }
          const files = readdirSync(src);
          files.forEach((file) => {
            if (file.includes("copy")) return;
            copyRecursive(join(src, file), join(dest, file));
          });
        } else {
          copyFileSync(src, dest);
        }
      }
      if (existsSync(publicDir)) {
        const files = readdirSync(publicDir);
        files.forEach((file) => {
          if (file.includes("copy")) return;
          try {
            const srcPath = join(publicDir, file);
            const destPath = join(outDir, file);
            copyRecursive(srcPath, destPath);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgeyBjb3B5RmlsZVN5bmMsIHJlYWRkaXJTeW5jLCBzdGF0U3luYywgbWtkaXJTeW5jLCBleGlzdHNTeW5jIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xuXG5mdW5jdGlvbiBjdXN0b21QdWJsaWNDb3B5KCkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdjdXN0b20tcHVibGljLWNvcHknLFxuICAgIGNsb3NlQnVuZGxlKCkge1xuICAgICAgY29uc3QgcHVibGljRGlyID0gJ3B1YmxpYyc7XG4gICAgICBjb25zdCBvdXREaXIgPSAnZGlzdCc7XG5cbiAgICAgIGZ1bmN0aW9uIGNvcHlSZWN1cnNpdmUoc3JjOiBzdHJpbmcsIGRlc3Q6IHN0cmluZykge1xuICAgICAgICBpZiAoc3RhdFN5bmMoc3JjKS5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgICAgaWYgKCFleGlzdHNTeW5jKGRlc3QpKSB7XG4gICAgICAgICAgICBta2RpclN5bmMoZGVzdCwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGZpbGVzID0gcmVhZGRpclN5bmMoc3JjKTtcbiAgICAgICAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgICAgICAgaWYgKGZpbGUuaW5jbHVkZXMoJ2NvcHknKSkgcmV0dXJuO1xuICAgICAgICAgICAgY29weVJlY3Vyc2l2ZShqb2luKHNyYywgZmlsZSksIGpvaW4oZGVzdCwgZmlsZSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvcHlGaWxlU3luYyhzcmMsIGRlc3QpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChleGlzdHNTeW5jKHB1YmxpY0RpcikpIHtcbiAgICAgICAgY29uc3QgZmlsZXMgPSByZWFkZGlyU3luYyhwdWJsaWNEaXIpO1xuICAgICAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgICAgIGlmIChmaWxlLmluY2x1ZGVzKCdjb3B5JykpIHJldHVybjtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBzcmNQYXRoID0gam9pbihwdWJsaWNEaXIsIGZpbGUpO1xuICAgICAgICAgICAgY29uc3QgZGVzdFBhdGggPSBqb2luKG91dERpciwgZmlsZSk7XG4gICAgICAgICAgICBjb3B5UmVjdXJzaXZlKHNyY1BhdGgsIGRlc3RQYXRoKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgQ291bGQgbm90IGNvcHkgJHtmaWxlfTpgLCBlcnIubWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBjdXN0b21QdWJsaWNDb3B5KCldLFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBleGNsdWRlOiBbJ2x1Y2lkZS1yZWFjdCddLFxuICB9LFxuICBwdWJsaWNEaXI6IGZhbHNlLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlOLFNBQVMsb0JBQW9CO0FBQ3RQLE9BQU8sV0FBVztBQUNsQixTQUFTLGNBQWMsYUFBYSxVQUFVLFdBQVcsa0JBQWtCO0FBQzNFLFNBQVMsWUFBWTtBQUVyQixTQUFTLG1CQUFtQjtBQUMxQixTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixjQUFjO0FBQ1osWUFBTSxZQUFZO0FBQ2xCLFlBQU0sU0FBUztBQUVmLGVBQVMsY0FBYyxLQUFhLE1BQWM7QUFDaEQsWUFBSSxTQUFTLEdBQUcsRUFBRSxZQUFZLEdBQUc7QUFDL0IsY0FBSSxDQUFDLFdBQVcsSUFBSSxHQUFHO0FBQ3JCLHNCQUFVLE1BQU0sRUFBRSxXQUFXLEtBQUssQ0FBQztBQUFBLFVBQ3JDO0FBQ0EsZ0JBQU0sUUFBUSxZQUFZLEdBQUc7QUFDN0IsZ0JBQU0sUUFBUSxVQUFRO0FBQ3BCLGdCQUFJLEtBQUssU0FBUyxNQUFNLEVBQUc7QUFDM0IsMEJBQWMsS0FBSyxLQUFLLElBQUksR0FBRyxLQUFLLE1BQU0sSUFBSSxDQUFDO0FBQUEsVUFDakQsQ0FBQztBQUFBLFFBQ0gsT0FBTztBQUNMLHVCQUFhLEtBQUssSUFBSTtBQUFBLFFBQ3hCO0FBQUEsTUFDRjtBQUVBLFVBQUksV0FBVyxTQUFTLEdBQUc7QUFDekIsY0FBTSxRQUFRLFlBQVksU0FBUztBQUNuQyxjQUFNLFFBQVEsVUFBUTtBQUNwQixjQUFJLEtBQUssU0FBUyxNQUFNLEVBQUc7QUFFM0IsY0FBSTtBQUNGLGtCQUFNLFVBQVUsS0FBSyxXQUFXLElBQUk7QUFDcEMsa0JBQU0sV0FBVyxLQUFLLFFBQVEsSUFBSTtBQUNsQywwQkFBYyxTQUFTLFFBQVE7QUFBQSxVQUNqQyxTQUFTLEtBQUs7QUFDWixvQkFBUSxLQUFLLGtCQUFrQixJQUFJLEtBQUssSUFBSSxPQUFPO0FBQUEsVUFDckQ7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUVBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLENBQUM7QUFBQSxFQUNyQyxjQUFjO0FBQUEsSUFDWixTQUFTLENBQUMsY0FBYztBQUFBLEVBQzFCO0FBQUEsRUFDQSxXQUFXO0FBQ2IsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
