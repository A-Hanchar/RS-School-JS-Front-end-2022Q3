import { generateElementWithClasses } from '../../../utils/generateElementWithClasses.js'

export const Title = () => {
  const titleContainer = generateElementWithClasses({
    tagName: 'div',
    classNames: ['testimonials-title', 'text-center'],
  })

  const h2 = generateElementWithClasses({
    tagName: 'h2',
    classNames: ['text-blueBlack', 'fw-400'],
  })
  h2.innerText = 'Testimonials'

  titleContainer.append(h2)

  return titleContainer
}
