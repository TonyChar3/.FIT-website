// vite.config.js
import { defineConfig } from "file:///D:/Web_Dev/FIT-website/FIT-website/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Web_Dev/FIT-website/FIT-website/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    port: 3e3,
    host: "10.0.0.129"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9f