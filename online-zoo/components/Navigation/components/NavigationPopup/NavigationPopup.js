import { COLORS } from '../../../../constants/COLORS.js'
import { pages } from '../../../../constants/pages/pages.js'
import { generateElementWithClasses } from '../../../../utils/generateElementWithClasses.js'
import { Logo } from '../../../Logo/Logo.js'
import { Popup } from '../../../Popup/Popup.js'
import { Link } from '../Link/Link.js'

export const NavigationPopup = () => {
  const logo = Logo({ color: COLORS.ORRANGE, colorOnHover: COLORS.WHITE, parentTag: 'h2' })

  const nav = document.createElement('nav')
  const ul = document.createElement('ul')

  pages.forEach(({ linkText, path, target }) => {
    const li = document.createElement('li')

    const linkWrapper = Link({
      linkColor: COLORS.BLACK,
      linkColorHover: COLORS.ORRANGE,
      pageInfo: { linkText, path, target },
    })

    li.append(linkWrapper)
    ul.append(li)
  })

  nav.append(ul)

  const popupContent = generateElementWithClasses({
    tagName: 'div',
    classNames: ['navigation-popup-content-wrapper', 'relative', 'bg-white'],
  })

  popupContent.append(logo, nav)

  const popup = Popup({ popupContent })

  return popup
}
