import clsx from "clsx";
import MD from "markdown-to-jsx";
import { options } from "./consts";
import * as styles from "./Markdown.module.scss";
import type { Props } from "./types";

export default function Markdown({ className, ...rest }: Props) {
  return <MD className={clsx(styles.markdown, className)} options={options} {...rest} />;
}
