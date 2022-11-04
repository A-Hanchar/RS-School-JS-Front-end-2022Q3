import { generateElementWithClasses } from '../../../../../../utils/generateElementWithClasses.js'

export const Title = () => {
  const TITLE = 'How it works'

  const title = generateElementWithClasses({
    tagName: 'h2',
    classNames: ['how-it-work-title', 'text-blueBlack', 'fw-400', 'text-center'],
  })

  title.innerText = TITLE

  return title
}
