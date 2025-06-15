import type { BodyType, Method } from '@/constants'

export type Route = `/${string}`

export type RequestBody = BodyInit | object

export interface RequestOptions {
  body?: RequestBody
  params?: URLSearchParams
  headers?: Record<string, string>
  bodyType?: BodyType
}

export interface InternalRequestOptions extends RequestOptions {
  route: Route
  method: Method
}

export interface ResponseLike
  extends Pick<Response, 'arrayBuffer' | 'bodyUsed' | 'headers' | 'json' | 'ok' | 'status' | 'statusText' | 'text'> {
  body: ReadableStream<Uint8Array> | null
}
