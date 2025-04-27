import type IStore from "#types/stores/IStore";
import type { AsyncOrSync } from "ts-essentials";

export default interface PersistentStore<T = unknown> extends IStore {
  dump(): T;
  restore(data: T): AsyncOrSync<void>;
}
