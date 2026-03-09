import type { WindowPosition, WindowSize } from "./types";

export default interface IWindowTransform {
  position: WindowPosition;
  size: WindowSize;

  zIndex: number;
}
