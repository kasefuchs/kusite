export interface ResponseLike
  extends Pick<Response, 'arrayBuffer' | 'bodyUsed' | 'headers' | 'json' | 'ok' | 'status' | 'statusText' | 'text'> {
  body: ReadableStream<Uint8Array> | null
}
