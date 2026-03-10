import type { AsyncOrSync } from "ts-essentials";
import type IStore from "./IStore";

export default interface ISerializableStore<T = unknown> extends IStore {
  readonly namespace: string;

  serialize(): T;
  deserialize(data: T): AsyncOrSync<void>;
}
