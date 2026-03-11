import { type ConfigParams, defineConfig, type RsbuildConfig } from "@rsbuild/core";
import { pluginPreact } from "@rsbuild/plugin-preact";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginTypedCSSModules } from "@rsbuild/plugin-typed-css-modules";

export default defineConfig((config: ConfigParams): RsbuildConfig => {
  const isDevelopment = config.env == "development";

  return {
    html: { title: "Kusite" },
    plugins: [
      pluginPreact({
        exclude: [/[\\/]node_modules[\\/]/, /[\\/]packages[\\/]/],
      }),
      pluginSass(),
      pluginTypedCSSModules(),
    ],
    output: {
      sourceMap: true,
      cssModules: { namedExport: true },
    },
    resolve: {
      alias: { "@": "./src" },
    },
    source: {
      preEntry: isDevelopment ? ["preact/debug"] : [],
    },
  };
});
