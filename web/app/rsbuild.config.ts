import { defineConfig } from "@rsbuild/core";
import { pluginPreact } from "@rsbuild/plugin-preact";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginTypedCSSModules } from "@rsbuild/plugin-typed-css-modules";
import { pluginYaml } from "@rsbuild/plugin-yaml";

export default defineConfig({
  html: {
    title: "Kusite",
  },
  output: {
    polyfill: "usage",
    cssModules: {
      namedExport: true,
    },
  },
  plugins: [
    pluginPreact(),
    pluginSass(),
    pluginTypedCSSModules(),
    pluginYaml(),
  ],
  resolve: {
    alias: {
      "#assets": "./src/assets",
      "#components": "./src/components",
      "#pages": "./src/pages",
      "#providers": "./src/providers",
      "#stores": "./src/stores",
      "#styles": "./src/styles",
      "#utilities": "./src/utilities",
      "#widgets": "./src/widgets",
    },
  },
  performance: {
    chunkSplit: {
      strategy: "single-vendor",
    },
  },
});
