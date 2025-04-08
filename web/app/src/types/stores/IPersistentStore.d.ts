import IStore from "./IStore";

export default interface PersistentStore<T = unknown> extends IStore {
  dump(): T;
  restore(data: T): void;
}
