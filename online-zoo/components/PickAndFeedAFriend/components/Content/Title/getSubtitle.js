import { generateElementWithClasses } from '../../../../../utils/generateElementWithClasses.js'
import { isClientWidthMore639 } from '../../../../../utils/isClientWidthMore639.js'
import { isClientWidthMore767 } from '../../../../../utils/isClientWidthMore767.js'

/**
 *
 * @param {{contentType: 'HowItWork' | 'FormContent'}} param0
 */
export const getSubtitle = ({ contentType }) => {
  const SUB_TITLE =
    'We know the animals bring you joy, and in these extraordinary times, we\’re glad.'

  const subtitle = generateElementWithClasses({
    tagName: 'p',
    classNames: 'text-blueBlack',
  })
  subtitle.innerText = SUB_TITLE

  let isAddTextCenterClass = (() => {
    if (contentType === 'HowItWork') return !isClientWidthMore639()
    if (contentType === 'FormContent') return !isClientWidthMore767()
  })()

  if (isAddTextCenterClass) {
    subtitle.classList.add('text-center')
  }

  addEventListener('resize', () => {
    if (isAddTextCenterClass) {
      if (contentType === 'HowItWork' && isClientWidthMore639())
        subtitle.classList.remove('text-center')
      if (contentType === 'FormContent' && isClientWidthMore767())
        subtitle.classList.remove('text-center')

      isAddTextCenterClass = false
    }

    if (!isAddTextCenterClass) {
      if (contentType === 'HowItWork' && !isClientWidthMore639())
        subtitle.classList.add('text-center')
      if (contentType === 'FormContent' && !isClientWidthMore767())
        subtitle.classList.add('text-center')

      isAddTextCenterClass = true
    }
  })

  return { subtitle }
}
