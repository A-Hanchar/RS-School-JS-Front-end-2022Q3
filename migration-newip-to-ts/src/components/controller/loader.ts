import { noCallbackError } from '../../helpers'
import { Callback, ENDPOINT, HTTP_METHOD, HTTP_STATUS_CODE } from '../../types'
import { ILoaderOptions, IMakeUrlOptions, RespRequest } from './types'

class Loader {
  baseLink: string
  options: ILoaderOptions

  constructor(baseLink: string, options: ILoaderOptions) {
    this.baseLink = baseLink
    this.options = options
  }

  makeUrl({ sources }: IMakeUrlOptions, endpoint: ENDPOINT): string {
    let url: string = `${this.baseLink}${endpoint}`

    const requestOptions: string[] = []

    if (this.options.apiKey) {
      requestOptions.push(`apiKey=${this.options.apiKey}`)
    }

    if (sources) {
      requestOptions.push(`sources=${sources}`)
    }

    if (requestOptions.length) {
      url += `?${requestOptions.join('&')}`
    }

    return url
  }

  errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === HTTP_STATUS_CODE.UNAUTHORIZED || res.status === HTTP_STATUS_CODE.NOT_FOUND)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`)
      throw Error(res.statusText)
    }

    return res
  }

  load<DataCallbackType>(
    method: HTTP_METHOD,
    endpoint: ENDPOINT,
    callback: Callback<DataCallbackType>,
    options: IMakeUrlOptions = {},
  ): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res): Promise<DataCallbackType> => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err))
  }

  getResp<DataCallbackType>({ endpoint, options = {} }: RespRequest, callback: Callback<DataCallbackType>): void {
    this.load(HTTP_METHOD.GET, endpoint, callback || noCallbackError, options)
  }
}

export default Loader
