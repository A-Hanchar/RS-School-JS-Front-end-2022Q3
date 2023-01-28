import { ISource } from './ISource'

export interface IArticle {
  source: ISource
  author: string | null
  title: string
  description: string | null
  url: string
  urlToImage: string | null
  publishedAt: string
  content: string | null
}
