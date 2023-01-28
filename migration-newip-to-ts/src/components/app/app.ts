import { IEverythingResponse, ISourcesResponse } from 'interfaces'
import AppController from '../controller/controller'
import { AppView } from '../view/appView'

class App {
  controller: AppController
  view: AppView

  constructor() {
    this.controller = new AppController()
    this.view = new AppView()
  }

  start() {
    const mainWrapper = document.querySelector('main')

    const loading = document.createElement('p')
    loading.style.padding = '16px'
    loading.innerText = 'Loading...'

    mainWrapper?.prepend(loading)

    this.controller.getSources<ISourcesResponse>((data) =>
      this.view.drawSources(data).then((sources) => {
        mainWrapper?.removeChild(loading)

        const input = <HTMLInputElement>document.querySelector('input#new-topics')

        input.addEventListener('change', () => {
          const value = input.value.trim()
          const findedId = sources.find(({ name }) => value === name)?.id

          if (findedId) {
            const news = <HTMLElement>document.querySelector('main .news')
            news.innerHTML = ''
            news.prepend(loading)

            this.controller.getNews<IEverythingResponse>(findedId, (data) => this.view.drawNews(data))
          }
        })
      }),
    )
  }
}

export default App
