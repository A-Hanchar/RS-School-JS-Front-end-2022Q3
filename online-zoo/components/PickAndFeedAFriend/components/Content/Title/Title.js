import { generateElementWithClasses } from '../../../../../utils/generateElementWithClasses.js'
import { getSubtitle } from './getSubtitle.js'
import { getTitle } from './getTitle.js'

/**
 *
 * @param {{contentType: 'HowItWork' | 'FormContent'}} param0
 */
export const Title = ({ contentType }) => {
  const titleWrapper = generateElementWithClasses({
    tagName: 'div',
    classNames: 'pick-and-feed-a-friend-content-title',
  })

  const { title } = getTitle()
  const { subtitle } = getSubtitle({ contentType })

  titleWrapper.append(title, subtitle)

  return titleWrapper
}
