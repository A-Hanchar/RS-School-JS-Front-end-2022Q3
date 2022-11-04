import { generateElementWithClasses } from '../../../../utils/generateElementWithClasses.js'
import { COLORS } from '../../../../constants/COLORS.js'
import { Container } from '../../../Container/Container.js'
import { Title } from '../Title/Title.js'
import { WatchOnlineButton } from '../WatchOnlineButton/WatchOnlineButton.js'
import { isClientWidthMore400 } from '../../../../utils/isClientWidthMore400.js'

/**
 * @param {{title: 'string', circleColor?: COLORS, highlight?: {text: 'string', color: COLORS}}} param0
 */
export const Content = ({ title, circleColor, highlight }) => {
  const container = Container()

  const contentWrapper = generateElementWithClasses({
    tagName: 'div',
    classNames: 'top-panda-content-wrapper',
  })

  const content = generateElementWithClasses({
    tagName: 'div',
    classNames: 'content',
  })

  container.append(contentWrapper)
  contentWrapper.append(content)

  let isShowButton = isClientWidthMore400()

  const titleText = Title({title, circleColor, highlight})
  const button = WatchOnlineButton({})
  
  content.append(titleText)

  addEventListener('load', () => {
    if(isShowButton){ 
      content.append(button)
    }
  })

  addEventListener('resize', () => {
    if(isClientWidthMore400() && !isShowButton) {
      content.append(button)

      isShowButton = true
    }

    if(!isClientWidthMore400() && isShowButton) {
      button.remove()

      isShowButton = false
    }
  })

  return {container, isShowButton}
}
