import { generateElementWithClasses } from '../../../../utils/generateElementWithClasses.js'
import { Popup } from '../../../Popup/Popup.js'
import { useGetCardContent } from './useGetCardContent.js'

/**
 *
 * @param {{firstName: string, lastName: string, avatar?: {src: string}, text: string, habitat: string, writingTime: string}} param0
 */
export const Card = ({ firstName, lastName, avatar, text, habitat, writingTime }) => {
  const cardWrapper = generateElementWithClasses({
    tagName: 'div',
    classNames: ['testimonial-card', 'show'],
  })

  useGetCardContent(cardWrapper, { firstName, lastName, avatar, text, habitat, writingTime })

  const popupContentWrapper = generateElementWithClasses({
    tagName: 'div',
    classNames: ['testimonials-popup-content-wrapper', 'testimonial-card', 'relative', 'bg-white'],
  })

  useGetCardContent(popupContentWrapper, {
    firstName,
    lastName,
    avatar,
    text,
    habitat,
    writingTime,
  })

  const cardPopup = Popup({
    popupContent: popupContentWrapper,
    className: 'testimonials-popup-card',
  })

  cardWrapper.addEventListener('click', () => {
    cardPopup.popupOpen()
  })

  return cardWrapper
}
