import { generateElementWithClasses } from '../../../../../utils/generateElementWithClasses.js'
import { isClientWidthMore639 } from '../../../../../utils/isClientWidthMore639.js'
import { Cards } from './Cards/Cards.js'
import { Description } from './Description/Description.js'
import { FeedButton } from './FeedButton/FeedButton.js'
import { Title } from './Title/Title.js'

export const HowItWork = () => {
  const howItWorkWrapper = generateElementWithClasses({
    tagName: 'div',
    classNames: 'how-it-work',
  })

  let { description, isShowDescription } = {
    description: Description(),
    isShowDescription: isClientWidthMore639(),
  }

  if (isShowDescription) {
    howItWorkWrapper.append(description)
  }

  howItWorkWrapper.append(Title(), Cards(), FeedButton())

  addEventListener('resize', () => {
    if (isClientWidthMore639() && !isShowDescription) {
      howItWorkWrapper.prepend(description)

      isShowDescription = true
    }

    if (!isClientWidthMore639() && isShowDescription) {
      description.remove()

      isShowDescription = false
    }
  })

  return howItWorkWrapper
}
