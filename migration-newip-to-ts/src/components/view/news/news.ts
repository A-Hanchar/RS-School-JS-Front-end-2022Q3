import { IArticle } from 'interfaces'
import './news.css'

class News {
  draw(data: IArticle[]): void {
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data

    const fragment = document.createDocumentFragment()
    const newsItemTemp = <HTMLTemplateElement>document.querySelector('#newsItemTemp')

    news.forEach((item, idx) => {
      const newsClone = <HTMLElement>newsItemTemp.content.cloneNode(true)

      const [newsItem, photo, author, date, title, source, content, readMoreLink] = [
        '.news__item',
        '.news__meta-photo',
        '.news__meta-author',
        '.news__meta-date',
        '.news__description-title',
        '.news__description-source',
        '.news__description-content',
        '.news__read-more a',
      ].map((selector) => <HTMLElement>newsClone.querySelector(selector))

      if (idx % 2) newsItem.classList.add('alt')

      photo.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`
      author.textContent = item.author || item.source.name
      date.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-')

      title.textContent = item.title
      source.textContent = item.source.name
      content.textContent = item.description
      readMoreLink.setAttribute('href', item.url)

      fragment.append(newsClone)
    })

    const newsWrapper = document.querySelector('.news')

    if (newsWrapper) {
      newsWrapper.innerHTML = ''
      newsWrapper.appendChild(fragment)
    }
  }
}

export default News
