import { type ConfigParams, defineConfig, type RsbuildConfig } from "@rsbuild/core";
import { pluginPreact } from "@rsbuild/plugin-preact";

export default defineConfig((config: ConfigParams): RsbuildConfig => {
  const isDevelopment = config.env == "development";

  return {
    html: { title: "Kusite" },
    plugins: [
      pluginPreact({
        exclude: [/[\\/]node_modules[\\/]/, /[\\/]packages[\\/]/],
      }),
    ],
    resolve: {
      alias: { "@": "./src" },
    },
    source: {
      preEntry: isDevelopment ? ["preact/debug"] : [],
    },
  };
});
