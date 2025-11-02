import { defineConfig } from "@rsbuild/core";

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  html: {
    title: "Kusite",
  },
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
