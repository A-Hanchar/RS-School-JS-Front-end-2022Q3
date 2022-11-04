import { COLORS } from '../../../../constants/COLORS.js'
import { generateElementWithClasses } from '../../../../utils/generateElementWithClasses.js'

/**
 * @param {{title: 'string', circleColor?: COLORS, highlight?: {text: 'string', color: COLORS}}} param0
 */
export const Title = ({ title, circleColor, highlight }) => {
  const h2 = generateElementWithClasses({
    tagName: 'h2',
    classNames: ['top-panda-title', 'uppercase', 'text-white', 'text-center', 'fw-700'],
  })
  h2.innerText = title

  if (highlight) {
    const span = generateElementWithClasses({
      tagName: 'span',
      classNames: ['highlight', `text-${highlight.color.toLowerCase()}`],
    })
    span.innerText = highlight.text

    const newTitle = h2.textContent.replace(highlight.text, span.outerHTML)
    h2.innerHTML = newTitle
  }

  if (circleColor) {
    h2.classList.add('relative', `circleColor-${circleColor}`)
  }

  return h2
}
