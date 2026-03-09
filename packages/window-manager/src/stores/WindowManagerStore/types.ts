import type { IWindowDescriptor } from "@/types";
import type { DeepPartial } from "ts-essentials";

export type IAddWindowOptions<D> = DeepPartial<Omit<IWindowDescriptor<D>, "id">>;
