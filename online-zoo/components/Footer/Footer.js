import { generateElementWithClasses } from '../../utils/generateElementWithClasses.js'
import { isClientWidthMore991 } from '../../utils/isClientWidthMore991.js'
import { Container } from '../Container/Container.js'
import { getFooterContent } from './getFooterContent.js'

export const Footer = () => {
  let {
    author,
    donateButton,
    logo,
    navigation,
    socialLinks,
    subscribeInfo: { subscribe, isShowSubscribe },
  } = getFooterContent()

  const footer = generateElementWithClasses({
    tagName: 'footer',
    classNames: 'bg-black',
  })

  const container = Container()
  const contentWrapper = generateElementWithClasses({
    tagName: 'div',
    classNames: 'footer-content-wrapper',
  })

  contentWrapper.append(socialLinks, logo, donateButton, navigation.nav, author)

  if (isShowSubscribe) contentWrapper.append(subscribe)

  footer.append(container)
  container.append(contentWrapper)

  addEventListener('resize', () => {
    if (!isClientWidthMore991() && isShowSubscribe) {
      subscribe.remove()

      isShowSubscribe = false
    }

    if (isClientWidthMore991() && !isShowSubscribe) {
      contentWrapper.append(subscribe)

      isShowSubscribe = true
    }
  })

  return footer
}
