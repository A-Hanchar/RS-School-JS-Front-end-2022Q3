import { root } from "../../../../../../../constants/pages/pages.js"
import { generateElementWithClasses } from "../../../../../../../utils/generateElementWithClasses.js"

export const DeadInformation = () => {
  const COUNT_OF_DEADS = 4
  const TITLE = 'Panda diet for the day.'

  const wrapper = generateElementWithClasses({
    tagName: 'div',
    classNames: 'dead-information'
  })

  const countWrapper = generateElementWithClasses({
    tagName: 'div',
    classNames: 'count'
  })

  const countNumber = document.createElement('h2')
  countNumber.innerText = COUNT_OF_DEADS

  const title = document.createElement('p')
  title.innerText = TITLE

  const imageCross = document.createElement('img')
  imageCross.src = `${root}/icons/x-black.png`
  imageCross.alt = 'Multy sign'

  countWrapper.append(countNumber, title)
  wrapper.append(countWrapper, imageCross)

  return wrapper
}