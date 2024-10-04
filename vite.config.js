import { resolve } from "path";
// import { env } from "process";
import { defineConfig, loadEnv } from "vite";

export default ({ mode }) => {
  // console.log(mode);
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  // console.log(loadEnv(mode, process.cwd()));
  // console.log(process.env);

  return defineConfig({
    base: process.env.VITE_BASE_URL,

    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
          services: resolve(__dirname, "services/index.html"),
          service: resolve(__dirname, "service/index.html"),
        },
      },
    },
  });
};
