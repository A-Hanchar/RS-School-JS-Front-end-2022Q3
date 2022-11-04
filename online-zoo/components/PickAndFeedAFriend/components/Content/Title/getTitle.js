import { generateElementWithClasses } from '../../../../../utils/generateElementWithClasses.js'

export const getTitle = () => {
  const TITLE = 'Pick and feed a friend'

  const title = generateElementWithClasses({
    tagName: 'h2',
    classNames: ['text-orrange', 'fw-400', 'text-center'],
  })
  title.innerText = TITLE

  return { title }
}
