import type { Options } from '@/types'
import type { MarkOptional } from 'ts-essentials'

export const DefaultOptions = {
  request: (url, init) => fetch(url, init),
} as const satisfies MarkOptional<Options, 'baseURL'>
