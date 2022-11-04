import { generateElementWithClasses } from '../../utils/generateElementWithClasses.js'
import { Container } from '../Container/Container.js'
import { LeaveFeedback } from './LeaveFeedback/LeaveFeedback.js'
import { Slider } from './Slider/Slider.js'
import { Title } from './Title/Title.js'

export const Testimonials = () => {
  const section = generateElementWithClasses({
    tagName: 'section',
    classNames: ['section-testimonials', 'relative'],
  })

  const container = Container()

  const title = Title()
  const slider = Slider()
  const leaveFeedback = LeaveFeedback()

  const testimonialsTotalContent = generateElementWithClasses({
    tagName: 'div',
    classNames: 'testimonials-content-wrapper',
  })

  testimonialsTotalContent.append(title, slider, leaveFeedback)
  container.append(testimonialsTotalContent)
  section.append(container)

  return section
}
