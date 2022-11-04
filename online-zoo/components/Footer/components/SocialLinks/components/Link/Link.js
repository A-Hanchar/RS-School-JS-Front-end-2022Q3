import { generateElementWithClasses } from '../../../../../../utils/generateElementWithClasses.js'
import { isClientWidthMore991 } from '../../../../../../utils/isClientWidthMore991.js'
import { Icon } from '../Icon/Icon.js'

/**
 *
 * @param {{id: string; path: string; title: string}} param0
 * @returns
 */
export const Link = ({ id, path, title }) => {
  const a = generateElementWithClasses({
    tagName: 'a',
    classNames: ['social-link', 'relative', 'fw-400', 'text-white'],
  })

  const icon = Icon({ id, title })
  a.prepend(icon)

  let { titleWrapper, isTitleShow } = {
    titleWrapper: document.createElement('span'),
    isTitleShow: isClientWidthMore991(),
  }
  titleWrapper.innerText = title

  if (isTitleShow) a.append(titleWrapper)

  a.href = path
  a.target = '_blank'

  /**
   *
   * @param {[string, string]} param0
   * @param {[string, string]} param1
   */
  const switchCssClasses = ([linkFirst, linkSecond], [iconFirst, iconSecond]) => {
    a.classList.replace(linkFirst, linkSecond)
    icon.classList.replace(iconFirst, iconSecond)
  }

  a.addEventListener('mouseover', () => {
    switchCssClasses(['text-white', 'text-green'], ['bg-gray-50', 'bg-green'])
  })

  a.addEventListener('mouseout', () => {
    switchCssClasses(['text-green', 'text-white'], ['bg-green', 'bg-gray-50'])
  })

  addEventListener('resize', () => {
    if (isClientWidthMore991() && !isTitleShow) {
      a.append(titleWrapper)
      isTitleShow = true
    }

    if (!isClientWidthMore991() && isTitleShow) {
      titleWrapper.remove()
      isTitleShow = false
    }
  })

  return a
}
