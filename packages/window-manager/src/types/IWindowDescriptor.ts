import type IWindowTransform from "./IWindowTransform.ts";
import type IWindowContent from "./IWindowContent.ts";

export default interface IWindowDescriptor<P = any, D = any> {
  id: string;
  data: D;
  content: IWindowContent<P>;
  transform: IWindowTransform;
}
