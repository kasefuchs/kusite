import type { AsyncOrSync } from 'ts-essentials'
import type IStore from './IStore'

export default interface IPersistentStore<T = unknown> extends IStore {
  dump(): T
  restore(data: T): AsyncOrSync<void>
}
