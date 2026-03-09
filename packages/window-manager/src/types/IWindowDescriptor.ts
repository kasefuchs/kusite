import type { ComponentChild } from "preact";
import type IWindowTransform from "./IWindowTransform";
import type IWindowConstraints from "./IWindowConstraints";
import type IWindowHandles from "./IWindowHandles";

export default interface IWindowDescriptor<D = any> {
  id: string;
  data?: D;
  children: ComponentChild;
  handles: IWindowHandles;
  transform: IWindowTransform;
  constraints: IWindowConstraints;
}
