import type { JSX } from "preact/jsx-runtime";
import * as styles from "./Typography.module.scss";
import type { Variant } from "./types";

export const variantMapping: Record<Variant, string> = {
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
  h4: styles.h4,
  h5: styles.h5,
  h6: styles.h6,
  body1: styles.body1,
  body2: styles.body2,
  subtitle1: styles.subtitle1,
  subtitle2: styles.subtitle2,
};

export const elementMapping: Record<Variant, JSX.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "p",
  body2: "p",
  subtitle1: "h6",
  subtitle2: "h6",
};
