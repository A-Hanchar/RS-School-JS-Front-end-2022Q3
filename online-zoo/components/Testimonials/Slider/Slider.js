import { generateElementWithClasses } from '../../../utils/generateElementWithClasses.js'
import { isClientWidthMore1199 } from '../../../utils/isClientWidthMore1199.js'
import { isClientWidthMore767 } from '../../../utils/isClientWidthMore767.js'
import { Card } from './Card/Card.js'
import { Scroll } from './Scroll/Scroll.js'
import { testimonialsList } from './testimonialsList.js'

export const Slider = () => {
  const contentWrapper = generateElementWithClasses({
    tagName: 'div',
    classNames: 'testimonials-slider-wrapper',
  })

  const testimonialsCards = generateElementWithClasses({
    tagName: 'div',
    classNames: 'testimonials-list',
  })

  let { input: scroll, isScrollRendered } = Scroll()
  let scrollPosition = scroll.value

  const renderTestimonialCards = () => {
    testimonialsCards.innerHTML = ''

    const countForRender = isClientWidthMore1199() ? 4 : 3

    const startIndex = Number(scrollPosition)
    const lastIndex = startIndex + countForRender

    for (let i = startIndex; i < lastIndex; i++) {
      const card = Card({ ...testimonialsList[i] })

      testimonialsCards.append(card)
    }
  }

  renderTestimonialCards()

  scroll.addEventListener('input', event => {
    scrollPosition = event.target.value

    renderTestimonialCards()
  })

  let isNeedRenderFourCards = !isClientWidthMore1199()

  addEventListener('resize', () => {
    if (isClientWidthMore767() && !isScrollRendered) {
      contentWrapper.append(scroll)

      isScrollRendered = true
    }

    if (!isClientWidthMore767() && isScrollRendered) {
      scroll.remove()
      isScrollRendered = false
    }

    if (isClientWidthMore1199() && isNeedRenderFourCards) {
      renderTestimonialCards()

      isNeedRenderFourCards = false
    }

    if (!isClientWidthMore1199() && !isNeedRenderFourCards) {
      renderTestimonialCards()

      isNeedRenderFourCards = true
    }
  })

  contentWrapper.append(testimonialsCards)

  if (isScrollRendered) {
    contentWrapper.append(scroll)
  }

  return contentWrapper
}
