import { type ConfigParams, defineConfig, loadEnv, type RsbuildConfig } from "@rsbuild/core";
import { pluginPreact } from "@rsbuild/plugin-preact";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginTypedCSSModules } from "@rsbuild/plugin-typed-css-modules";
import { pluginYaml } from "@rsbuild/plugin-yaml";

export default defineConfig((config: ConfigParams): RsbuildConfig => {
  const isDevelopment = config.env == "development";
  const { publicVars } = loadEnv({ prefixes: ["KUSITE_"] });

  return {
    html: { title: "Kusite" },
    output: {
      target: "web",
      cssModules: { namedExport: true },
    },
    plugins: [
      pluginPreact({
        exclude: [/[\\/]node_modules[\\/]/, /[\\/]packages[\\/]/],
      }),
      pluginSass(),
      pluginTypedCSSModules(),
      pluginYaml(),
    ],
    resolve: {
      alias: {
        "#": "./src",
        "#assets": "./src/assets",
        "#components": "./src/components",
        "#pages": "./src/pages",
        "#providers": "./src/providers",
        "#stores": "./src/stores",
        "#styles": "./src/styles",
      },
    },
    source: {
      define: publicVars,
      entry: { index: "./src/index.ts" },
      preEntry: isDevelopment ? ["preact/debug"] : [],
    },
  };
});
