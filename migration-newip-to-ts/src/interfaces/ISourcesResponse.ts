import { RESPONSE_STATUS } from 'types'
import { ISource } from './ISource'

export interface ISourcesResponse {
  status: RESPONSE_STATUS
  code?: string
  error?: string
  sources: Array<ISource>
}
