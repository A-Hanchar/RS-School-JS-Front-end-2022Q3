import { COLORS } from '../../../../constants/COLORS.js'
import { generateElementWithClasses } from '../../../../utils/generateElementWithClasses.js'
import { Button } from '../../../Button/Button.js'

/**
 * 
 * @param {{withSectionWrapper?: Boolen}} param0 
 * @returns 
 */
export const WatchOnlineButton = ({withSectionWrapper}) => {
  const button = Button({
    buttonColor: COLORS.ORRANGE,
    isUppercase: true,
    fontWeight: '500',
    text: 'Watch online',
    buttonClassNames: 'watch-online-button',
  })

  if(!withSectionWrapper) {
    return button
  }

  const section = generateElementWithClasses({
    tagName: 'section',
    classNames: 'watch-online-button-wrapper',
  })
  section.append(button)

  return section
}