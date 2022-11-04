import { COLORS } from '../../constants/COLORS.js'
import { generateElementWithClasses } from '../../utils/generateElementWithClasses.js'

/**
 *
 * @param {{direction: 'left' | 'right', arrowColor: COLORS, buttonColor: COLORS}} param0
 */
export const ButtonSliderNavigation = ({
  direction,
  arrowColor = COLORS.WHITE,
  buttonColor = COLORS.ORRANGE,
}) =>
  generateElementWithClasses({
    tagName: 'button',
    classNames: [
      'slider-navigation',
      `arrow-${arrowColor}`,
      `button-${buttonColor}`,
      `direction-${direction}`,
      'relative',
    ],
  })
