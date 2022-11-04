import { generateElementWithClasses } from '../../../../utils/generateElementWithClasses.js'
import { FormContent } from './FormContent/FormContent.js'
import { HowItWork } from './HowItWork/HowItWork.js'
import { Title } from './Title/Title.js'

/**
 *
 * @param {{contentType: 'HowItWork' | 'FormContent'}} param0
 */
export const Content = ({ contentType }) => {
  const contentWrapper = generateElementWithClasses({
    tagName: 'div',
    classNames: ['pick-and-feed-a-friend-content-wrapper', 'bg-pink-50'],
  })
  const title = Title({ contentType })

  contentWrapper.append(title)

  if (contentType === 'HowItWork') {
    const content = HowItWork()

    contentWrapper.append(content)

    return contentWrapper
  }

  if (contentType === 'FormContent') {
    const { topInformation, formContentWrapper } = FormContent()

    contentWrapper.append(formContentWrapper)

    addEventListener('load', () => {
      contentWrapper.before(topInformation)
    })

    return contentWrapper
  }
}
