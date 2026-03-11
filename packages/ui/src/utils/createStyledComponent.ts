import mergeComponentProps from "@/utils/mergeComponentProps";
import { createElement, type JSX, type ComponentType } from "preact";

export default function createStyledComponent<T extends keyof JSX.IntrinsicElements>(
  tag: T,
  defaultProps: Partial<JSX.IntrinsicElements[T]> = {},
): ComponentType<JSX.IntrinsicElements[T]> {
  const Component = (props: JSX.IntrinsicElements[T]) => {
    return createElement(tag, mergeComponentProps(defaultProps, props));
  };

  Component.displayName = `StyledComponent(${tag}})`;

  return Component;
}
