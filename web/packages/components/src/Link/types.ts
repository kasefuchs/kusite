import type { TypographyProps } from "#/Typography";
import { HTMLAttributes } from "react-dom/src";

export type Underline = "always" | "hover" | "never";

export type Props = Omit<TypographyProps, "element"> &
  HTMLAttributes<HTMLAnchorElement> & {
    underline?: Underline;
  };
