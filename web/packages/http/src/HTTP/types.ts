import type { ResponseLike } from "#/types";

export interface Options {
  baseURL: string;
  request(url: RequestInfo | URL, init: RequestInit): Promise<ResponseLike>;
}
