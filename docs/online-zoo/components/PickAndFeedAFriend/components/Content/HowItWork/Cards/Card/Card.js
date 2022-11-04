import { root } from '../../../../../../../constants/pages/pages.js'
import { generateElementWithClasses } from '../../../../../../../utils/generateElementWithClasses.js'

/**
 *
 * @param {{cardText: string, cardType: string}} param0
 * @returns
 */
export const Card = ({ cardText, cardType }) => {
  const card = generateElementWithClasses({
    tagName: 'div',
    classNames: 'how-it-work-card',
  })

  const icon = generateElementWithClasses({
    tagName: 'div',
    classNames: ['icon', 'relative'],
  })

  const image = document.createElement('img')
  image.src = `${root}/icons/${cardType}.png`
  image.alt = cardText

  icon.append(image)

  const p = document.createElement('p')
  p.innerText = cardText

  card.append(icon, p)

  return card
}
