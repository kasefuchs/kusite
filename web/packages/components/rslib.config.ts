import { pluginPreact } from '@rsbuild/plugin-preact'
import { pluginSass } from '@rsbuild/plugin-sass'
import { pluginTypedCSSModules } from '@rsbuild/plugin-typed-css-modules'
import { defineConfig, type Format, type LibConfig, type RslibConfig } from '@rslib/core'

const formats: Format[] = ['esm', 'cjs']
const libConfig: Partial<LibConfig> = {
  dts: true,
  syntax: 'es2020',
  externalHelpers: true,
}

export default defineConfig(
  (): RslibConfig => ({
    lib: formats.map(
      (format, index): LibConfig => ({
        ...libConfig,
        format,
        dts: libConfig?.dts && !index,
      }),
    ),
    plugins: [pluginPreact(), pluginSass(), pluginTypedCSSModules()],
    output: {
      target: 'web',
      cssModules: { namedExport: true },
    },
    resolve: {
      alias: { '@': './src' },
    },
  }),
)
