import { generateElementWithClasses } from '../../../../../../utils/generateElementWithClasses.js'
import { Card } from './Card/Card.js'

export const Cards = () => {
  const cardsWrapper = generateElementWithClasses({
    tagName: 'div',
    classNames: 'how-it-work-cards',
  })

  const cards = [
    {
      text: 'Pay with card',
      cardImageType: 'pay',
    },
    {
      text: 'Payment goes to the zoo',
      cardImageType: 'hand-with-tree',
    },
    {
      text: 'Your favourite animal gets delicious dish',
      cardImageType: 'monkey',
    },
  ]

  cards.forEach(({ text, cardImageType }) => {
    const card = Card({ cardText: text, cardType: cardImageType })

    cardsWrapper.append(card)
  })

  return cardsWrapper
}
