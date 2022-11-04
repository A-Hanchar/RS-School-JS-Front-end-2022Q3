import { COLORS } from '../../constants/COLORS.js'
import { generateElementWithClasses } from '../../utils/generateElementWithClasses.js'
import { isClientWidthMore400 } from '../../utils/isClientWidthMore400.js'
import { Content } from './components/Content/Content.js'
import { WatchOnlineButton } from './components/WatchOnlineButton/WatchOnlineButton.js'

/**
 * @param {{content?: {title: 'string', circleColor?: COLORS}, highlight?: {text: 'string', color: COLORS}}} param0
 */
export const TopPanda = ({ content, highlight }) => {
  const section = generateElementWithClasses({
    tagName: 'section',
    classNames: ['top-panda', 'relative'],
  })

  if (!content) {
    section.classList.add('without-content')

    return section
  }

  const { container: contentComponent, isShowButton } = Content({ ...content, highlight })
  let { watchOnlineButton, isShowWatchOnlineButton } = {
    watchOnlineButton: WatchOnlineButton({ withSectionWrapper: true }),
    isShowWatchOnlineButton: !isShowButton,
  }

  section.classList.add('with-content')
  section.append(contentComponent)

  addEventListener('load', () => {
    if (isShowWatchOnlineButton) {
      section.after(watchOnlineButton)

      isShowWatchOnlineButton = true
    }
  })

  addEventListener('resize', () => {
    if (isClientWidthMore400() && isShowWatchOnlineButton) {
      watchOnlineButton.remove()

      isShowWatchOnlineButton = false
    }

    if (!isClientWidthMore400() && !isShowWatchOnlineButton) {
      section.after(watchOnlineButton)

      isShowWatchOnlineButton = true
    }
  })

  return section
}
