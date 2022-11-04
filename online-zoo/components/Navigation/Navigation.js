import { pages } from '../../constants/pages/pages.js'
import { COLORS } from '../../constants/COLORS.js'
import { Link } from './components/Link/Link.js'
import { BurgerButton } from './components/BurgerButton/BurgerButton.js'
import { generateElementWithClasses } from '../../utils/generateElementWithClasses.js'
import { NavigationPopup } from './components/NavigationPopup/NavigationPopup.js'

/**
 *
 * @param {{linkColor: COLORS, linkColorHover: COLORS, position: 'header' | 'footer'}} param0
 * @returns
 */
export const Navigation = ({
  linkColor = COLORS.WHITE,
  linkColorHover = COLORS.ORRANGE,
  position,
}) => {
  const nav = document.createElement('nav')
  const ul = document.createElement('ul')

  pages.forEach(({ linkText, path, target, isShowInFooter, isShowInHeader }) => {
    if ((position === 'header' && !isShowInHeader) || (position === 'footer' && !isShowInFooter))
      return

    const li = document.createElement('li')

    const linkWrapper = Link({
      linkColor,
      linkColorHover,
      pageInfo: { linkText, path, target },
    })

    li.append(linkWrapper)
    ul.append(li)
  })

  nav.append(ul)

  const burgerButton = BurgerButton()

  const navigationPopup = NavigationPopup()

  burgerButton.addEventListener('click', () => {
    navigationPopup.popupOpen()
  })

  return { nav, burgerButton }
}
