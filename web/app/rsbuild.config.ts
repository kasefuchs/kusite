import { defineConfig } from "@rsbuild/core";
import { pluginPreact } from "@rsbuild/plugin-preact";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginYaml } from "@rsbuild/plugin-yaml";

export default defineConfig({
  plugins: [pluginPreact(), pluginSass(), pluginYaml()],
});
