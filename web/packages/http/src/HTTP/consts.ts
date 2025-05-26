import type { Options } from './types'

export enum Method {
  Get = 'GET',
  Put = 'PUT',
  Post = 'POST',
  Patch = 'PATCH',
  Delete = 'DELETE',
}

export enum BodyType {
  json,
  init,
}

export const DefaultOptions = {
  baseURL: '/api',
  request: (url, init) => fetch(url, init),
} satisfies Options
