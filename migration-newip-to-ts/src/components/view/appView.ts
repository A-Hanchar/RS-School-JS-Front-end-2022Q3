import { IEverythingResponse, ISource, ISourcesResponse } from 'interfaces'
import News from './news/news'
import Sources from './sources/sources'

export class AppView {
  news: News
  sources: Sources

  constructor() {
    this.news = new News()
    this.sources = new Sources()
  }

  drawNews({ articles }: IEverythingResponse): void {
    const values = articles ?? []

    this.news.draw(values)
  }

  drawSources({ sources }: ISourcesResponse): Promise<ISource[]> {
    return new Promise((resolve, _reject) => {
      const values = sources ?? []

      this.sources.draw(values).then(() => resolve(sources))
    })
  }
}

export default AppView
