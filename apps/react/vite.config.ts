import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  // resolve: {
  //   alias: [
  //     {
  //       find: /^api$/,
  //       replacement: "../api",
  //     },
  //     {
  //       find: /^db$/,
  //       replacement: path.resolve(__dirname, "../../packages/db/dist"),
  //     },
  //   ],
  // },
});
