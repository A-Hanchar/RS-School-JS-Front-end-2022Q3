import { COLORS } from '../../constants/COLORS.js'
import { root } from '../../constants/pages/pages.js'
import { generateElementWithClasses } from '../../utils/generateElementWithClasses.js'

/**
 *
 * @param {{color: COLORS}} param0
 */
export const getSubText = ({ color }) => {
  const subText = 'online'

  const subTextWrapper = generateElementWithClasses({
    tagName: 'div',
    classNames: ['relative', 'bottom-text'],
  })

  subTextWrapper.innerText = subText

  const bambooImage = document.createElement('img')
  bambooImage.src = `${root}/icons/bamboo-${color}.png`

  subTextWrapper.append(bambooImage)

  return { subTextWrapper, bambooImage }
}
