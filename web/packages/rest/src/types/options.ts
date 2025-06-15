import type { ResponseLike } from './http'
import type { MarkRequired } from 'ts-essentials'

export interface Options {
  baseURL: string
  request(url: RequestInfo | URL, init: RequestInit): Promise<ResponseLike>
}

export type ConstructorOptions = MarkRequired<Partial<Options>, 'baseURL'>
