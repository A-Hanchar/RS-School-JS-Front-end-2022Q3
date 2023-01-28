import { ENDPOINT } from "types"

export interface ILoaderOptions {
  apiKey?: string
}

export interface IMakeUrlOptions {
  sources?: string
}

export type RespRequest = {
  endpoint: ENDPOINT
  options?: IMakeUrlOptions
}
