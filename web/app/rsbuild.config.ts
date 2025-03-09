import { defineConfig } from "@rsbuild/core";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginPreact } from "@rsbuild/plugin-preact";

export default defineConfig({
  plugins: [pluginSass(), pluginPreact()],
});
