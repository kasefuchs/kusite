import IStore from "./IStore";

export default interface PersistentStore<T = any> extends IStore {
  dump(): T;
  restore(data: T): void;
}
