import { ISource } from 'interfaces'
import './sources.css'

class Sources {
  draw = (data: ISource[]): Promise<null> =>
    new Promise((resolve, _reject) => {
      const id: string = 'new-topics'
      const idList: string = `${id}-list`

      const label = document.createElement('label')
      label.setAttribute('for', id)
      label.textContent = 'Choose a topic:'

      const input = document.createElement('input')
      input.id = id
      input.name = id
      input.setAttribute('list', idList)

      const dataList = document.createElement('datalist')
      dataList.id = idList

      data.forEach((item) => {
        const option = document.createElement('option')
        option.setAttribute('value', item.name)
        option.setAttribute('data-source-id', item.id ?? '')

        dataList?.append(option)
      })

      const sourcesWrapper = document.querySelector('.sources')

      sourcesWrapper?.append(label, input, dataList)

      resolve(null)
    })
}

export default Sources
