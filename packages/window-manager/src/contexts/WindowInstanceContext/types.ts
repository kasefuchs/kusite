import type { IWindowDescriptor, WindowPosition, WindowSize } from "@/types";

export interface Value {
  readonly descriptor: IWindowDescriptor;

  close(): boolean;
  focus(): number;
  updatePosition(position: WindowPosition): void;
  updateSize(size: WindowSize): void;
}
