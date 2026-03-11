import clsx from "clsx";
import mergeWith from "lodash/mergeWith";
import type { MergeWithCustomizer } from "lodash";

export const mergeComponentPropsCustomizer: MergeWithCustomizer = (objValue, srcValue, key) => {
  switch (key) {
    case "className":
      return clsx(objValue, srcValue);
    case "children":
      return srcValue;
    default:
      return undefined;
  }
};

export default function mergeComponentProps<T>(baseProps: Partial<T>, userProps: T): T {
  return mergeWith({} as T, baseProps, userProps, mergeComponentPropsCustomizer);
}
