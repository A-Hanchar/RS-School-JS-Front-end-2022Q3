import { generateElementWithClasses } from '../../utils/generateElementWithClasses.js'
import { isClientWidthMore991 } from '../../utils/isClientWidthMore991.js'
import { Container } from '../Container/Container.js'
import { getHeaderContent } from './getHeaderContent.js'

export const Header = () => {
  const header = generateElementWithClasses({
    tagName: 'header',
    classNames: ['fw-500', 'text-white', 'bg-black', `${isClientWidthMore991() ? 'relative' : 'sticky'}`],
  })

  const container = Container()

  const headerContentWrapper = generateElementWithClasses({
    tagName: 'div',
    classNames: 'header-content-wrapper',
  })

  let {
    logo,
    navInfo: { nav: navigation, burgerButton },
    isShowNavigation,
  } = getHeaderContent()

  header.append(container)
  container.append(headerContentWrapper)

  headerContentWrapper.append(logo, isShowNavigation ? navigation : burgerButton)

  window.onresize = () => {
    if (!isClientWidthMore991() && isShowNavigation) {
      header.classList.replace('relative', 'sticky')

      navigation.remove()
      headerContentWrapper.append(burgerButton)

      isShowNavigation = false
    }

    if (isClientWidthMore991() && !isShowNavigation) {
      header.classList.replace('sticky', 'relative')

      burgerButton.remove()
      headerContentWrapper.append(navigation)

      isShowNavigation = true
    }
  }

  return header
}
