import type { BodyType, Method } from '#/HTTP'

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
