import { HTTP_METHOD } from '../types'

export const noCallbackError = (method: HTTP_METHOD = HTTP_METHOD.GET): void => {
  console.error(`No callback for ${method} response`)
}
