import * as styles from "./Link.module.scss";
import type { Underline } from "./types";

export const underlineMapping: Record<Underline, string> = {
  always: styles.underlineAlways,
  hover: styles.underlineHover,
  never: styles.underlineNever,
};
