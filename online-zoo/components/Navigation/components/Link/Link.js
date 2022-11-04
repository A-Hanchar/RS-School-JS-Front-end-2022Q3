import { COLORS } from '../../../../constants/COLORS.js'
import { routes } from '../../../../constants/pages/pages.js'
import { generateElementWithClasses } from '../../../../utils/generateElementWithClasses.js'

/**
 *
 * @param {{linkColor: COLORS, linkColorHover: COLORS, tagName: 'a' | 'p', pageInfo?: {path: 'string', linkText: string, target?: '_blank'}}} param0
 */
export const Link = ({
  linkColor = COLORS.WHITE,
  linkColorHover = COLORS.ORRANGE,
  pageInfo: { linkText, path, target },
}) => {
  const COLOR_CSS_CLASS = `text-${linkColor.toLowerCase()}`
  const HOVER_COLOR_CSS_CLASS = `text-${linkColorHover.toLowerCase()}`

  const isCurrentPage = window.location.pathname === path
  const isHasLink = path !== routes.none

  const tag = generateElementWithClasses({
    tagName: !isHasLink || isCurrentPage ? 'p' : 'a',
    classNames: ['link', COLOR_CSS_CLASS],
  })

  tag.innerText = linkText

  const replaceTagClassColorToHoverColor = () => {
    tag.classList.replace(COLOR_CSS_CLASS, HOVER_COLOR_CSS_CLASS)
  }

  if (isCurrentPage) {
    tag.classList.add('active')

    replaceTagClassColorToHoverColor()

    return tag
  }

  tag.addEventListener('mouseover', replaceTagClassColorToHoverColor)

  tag.addEventListener('mouseleave', () => {
    tag.classList.replace(HOVER_COLOR_CSS_CLASS, COLOR_CSS_CLASS)
  })

  if (isHasLink) {
    tag.href = path

    if (target) tag.target = target
  }

  return tag
}
