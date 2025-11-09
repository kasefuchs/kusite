import {
  defineConfig,
  type Format,
  type LibConfig,
  type RslibConfig,
} from "@rslib/core";

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
  tools: {
    rspack: {
      module: {
        rules: [
          {
            test: /\.ts$/,
            use: [{ loader: "@kusite/minify-literals-loader" }],
          },
        ],
      },
    },
  },
  resolve: {
    alias: { "@": "./src" },
  },
});
