import type { ComponentChild } from "preact";
import type IWindowTransform from "./IWindowTransform";
import type IWindowConstraints from "@/types/IWindowConstraints";

export default interface IWindowDescriptor<D = any> {
  id: string;
  data?: D;
  children: ComponentChild;
  transform: IWindowTransform;
  constraints: IWindowConstraints;
}
