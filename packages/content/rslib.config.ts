import { defineConfig } from "@rslib/core";

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  lib: [
    {
      dts: true,
      format: "esm",
      syntax: "es2020",
      externalHelpers: true,
    },
  ],
  resolve: {
    alias: { "@": "./src" },
  },
});
