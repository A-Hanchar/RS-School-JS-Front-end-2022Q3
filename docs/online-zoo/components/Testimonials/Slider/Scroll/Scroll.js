import { generateElementWithClasses } from '../../../../utils/generateElementWithClasses.js'
import { isClientWidthMore1199 } from '../../../../utils/isClientWidthMore1199.js'
import { isClientWidthMore767 } from '../../../../utils/isClientWidthMore767.js'
import { testimonialsList } from '../testimonialsList.js'

export const Scroll = () => {
  const input = generateElementWithClasses({
    tagName: 'input',
    classNames: 'testimonials-scroll',
  })

  input.type = 'range'
  input.value = 0
  input.step = 1
  input.min = 0

  const setMaxValue = () => {
    const countForRender = isClientWidthMore1199() ? 4 : 3

    input.max = testimonialsList.length - countForRender
  }

  setMaxValue()

  addEventListener('resize', () => {
    setMaxValue()
  })

  return { input, isScrollRendered: isClientWidthMore767() }
}
