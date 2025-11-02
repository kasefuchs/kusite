import { defineConfig } from "@rsbuild/core";

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  html: {
    title: "Kusite",
  },
  resolve: {
    alias: { "@": "./src" },
  },
});
