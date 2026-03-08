import type { IWindowDescriptor } from "@/types";

export interface Value {
  readonly descriptor: IWindowDescriptor;

  close(): boolean;
  focus(): number;
  updatePosition(x: number, y: number): void;
  updateSize(width: number, height: number): void;
}
