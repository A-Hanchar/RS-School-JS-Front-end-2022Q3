import { RESPONSE_STATUS } from 'types'
import { IArticle } from './IArticle'

export interface IEverythingResponse {
  status: RESPONSE_STATUS
  code?: string
  error?: string
  totalResults: number
  articles: Array<IArticle>
}
