import type { ComponentType } from "preact";

export default interface IWindowContent<P = any> {
  Component: ComponentType<P>;
  props: P;
}
