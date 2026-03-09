import type { ResizeHandle } from "react-resizable";

export default interface IWindowHandles {
  dragClassName: string;
  resizeDirections: ResizeHandle[];
}
