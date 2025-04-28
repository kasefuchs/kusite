import { pluginPreact } from "@rsbuild/plugin-preact";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginTypedCSSModules } from "@rsbuild/plugin-typed-css-modules";
import { defineConfig, type Dts, type Format, type LibConfig, type RslibConfig } from "@rslib/core";

export default defineConfig((): RslibConfig => {
  const dts: Dts = { bundle: true, autoExtension: true };
  const formats: Format[] = ["esm", "cjs"];

  return {
    lib: formats.map((format): LibConfig => ({ dts, format, syntax: "es2020" })),
    output: {
      target: "web",
      cssModules: { namedExport: true },
    },
    plugins: [pluginPreact(), pluginSass(), pluginTypedCSSModules()],
    resolve: {
      alias: {
        "#components": "./src/components",
        "#styles": "./src/styles",
      },
    },
  };
});
