import type { LoaderContext } from "@rspack/core";
import { type DefaultOptions, minifyHTMLLiterals } from "minify-literals";

export type MinifyLiteralsLoaderOptions = Omit<DefaultOptions, "fileName">;

// noinspection JSUnusedGlobalSymbols
export default function minifyLiteralsLoader(
  this: LoaderContext<MinifyLiteralsLoaderOptions | undefined>,
  source: string,
) {
  const options: DefaultOptions = {
    fileName: this.resourcePath,
    ...this.getOptions(),
  };

  const callback = this.async();
  minifyHTMLLiterals(source, options)
    .then((res) => callback(null, res?.code ?? source, res?.map?.toString()))
    .catch((err) => callback(err));
}
