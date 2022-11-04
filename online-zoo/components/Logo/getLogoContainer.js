import { COLORS } from '../../constants/COLORS.js'
import { routes } from '../../constants/pages/pages.js'
import { generateElementWithClasses } from '../../utils/generateElementWithClasses.js'

/**
 *
 * @param {{color: COLORS, colorOnHover: COLORS, parentTag: 'h1' | 'h2', fontWeight: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900', logoSize: 'normal', setBambooImage: () => void}} param0
 * @returns
 */
export const getLogoContainer = ({
  color,
  colorOnHover,
  parentTag,
  fontWeight,
  logoSize,
  setBambooImage,
}) => {
  const mainText = 'PetStory'

  const COLOR_CSS_CLASS = `color-${color}`
  const HOVER_COLOR_CSS_CLASS = `color-${colorOnHover}`

  const container = generateElementWithClasses({
    tagName: parentTag,
    classNames: ['logo', 'relative', `fw-${fontWeight}`, `size-${logoSize}`, COLOR_CSS_CLASS],
  })
  container.innerText = mainText

  container.addEventListener('mouseover', () => {
    container.classList.replace(COLOR_CSS_CLASS, HOVER_COLOR_CSS_CLASS)

    setBambooImage(colorOnHover)
  })

  container.addEventListener('mouseleave', () => {
    container.classList.replace(HOVER_COLOR_CSS_CLASS, COLOR_CSS_CLASS)

    setBambooImage(color)
  })

  container.addEventListener('click', () => {
    window.location.href = routes.about
  })

  return container
}
