import type {
  InternalRequestOptions,
  RequestBody,
  RequestOptions,
  ResponseLike,
  Route,
  Options,
  ConstructorOptions,
} from '@/types'
import { BodyType, Method, DefaultOptions } from '@/constants'

export default class REST {
  public readonly options: Options

  public constructor(options: ConstructorOptions) {
    this.options = { ...DefaultOptions, ...options } as Options
  }

  private static parseResponse(response: ResponseLike): Promise<unknown> {
    if (response.headers.get('Content-Type')?.startsWith('application/json')) {
      return response.json()
    }

    return response.arrayBuffer()
  }

  private static createBodyInit(body: RequestBody, type?: BodyType): BodyInit {
    switch (type) {
      case BodyType.init:
        return body as BodyInit

      case BodyType.json:
      default:
        return JSON.stringify(body)
    }
  }

  public async get<R>(route: Route, options?: RequestOptions): Promise<R> {
    return this.request<R>({
      method: Method.Get,
      route,
      ...options,
    })
  }

  public async put<R>(route: Route, options?: RequestOptions): Promise<R> {
    return this.request<R>({
      method: Method.Put,
      route,
      ...options,
    })
  }

  public async post<R>(route: Route, options?: RequestOptions): Promise<R> {
    return this.request<R>({
      method: Method.Post,
      route,
      ...options,
    })
  }

  public async patch<R>(route: Route, options?: RequestOptions): Promise<R> {
    return this.request<R>({
      method: Method.Patch,
      route,
      ...options,
    })
  }

  public async delete<R>(route: Route, options?: RequestOptions): Promise<R> {
    return this.request<R>({
      method: Method.Delete,
      route,
      ...options,
    })
  }

  public async request<R>(options: InternalRequestOptions): Promise<R> {
    const { headers = {}, method, params, route, body, bodyType } = options

    const url = new URL(`${this.options.baseURL}${route}`)
    if (params) url.search = params.toString()

    const bodyInit = body ? REST.createBodyInit(body, bodyType) : null

    const response = await this.options.request(url, {
      body: method == Method.Get ? null : bodyInit,
      headers,
      method,
    })

    return (await REST.parseResponse(response)) as R
  }
}
