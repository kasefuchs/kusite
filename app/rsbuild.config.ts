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
            use: [{ loader: "minify-html-literals-loader" }],
          },
        ],
      },
    },
  },
  resolve: {
    alias: { "@": "./src" },
  },
});
