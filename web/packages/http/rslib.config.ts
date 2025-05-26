import { defineConfig, type Dts, type Format, type LibConfig, type RslibConfig } from '@rslib/core'

export default defineConfig((): RslibConfig => {
  const dts: Dts = { bundle: true, autoExtension: true }
  const formats: Format[] = ['esm', 'cjs']

  return {
    lib: formats.map((format): LibConfig => ({ dts, format, syntax: 'es2020' })),
    output: {
      target: 'web',
    },
    resolve: {
      alias: {
        '#': './src',
      },
    },
    source: {
      entry: { index: './src/index.ts' },
    },
  }
})
