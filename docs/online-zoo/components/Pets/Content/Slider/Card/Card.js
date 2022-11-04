import { root } from '../../../../../constants/pages/pages.js'
import { generateElementWithClasses } from '../../../../../utils/generateElementWithClasses.js'

export const Card = ({ title, habitat, description, foodType, imageSrc }) => {
  const card = generateElementWithClasses({
    tagName: 'div',
    classNames: ['pets-slider-card', 'relative'],
  })

  const image = document.createElement('img')
  image.src = imageSrc
  image.alt = title

  const cardDescriptionWrapper = generateElementWithClasses({
    tagName: 'div',
    classNames: 'card-description'
  })

  const cardDescription = document.createElement('div')

  const h2 = generateElementWithClasses({
    tagName: 'h2',
    classNames: ['uppercase', 'fw-500']
  })
  h2.innerText = title

  const p = generateElementWithClasses({
    tagName: 'p',
    classNames: 'fw-300'
  })
  p.innerText = habitat

  const imageType = document.createElement('img')
  imageType.src = `${root}/icons/${(foodType === 'meet' && 'meet-fish') || (foodType === 'vegetables' && 'banana-bamboo')}.png`
  imageType.alt = foodType

  cardDescription.append(h2, p)

  cardDescriptionWrapper.append(cardDescription, imageType)
  card.append(image, cardDescriptionWrapper)

  return card
}

