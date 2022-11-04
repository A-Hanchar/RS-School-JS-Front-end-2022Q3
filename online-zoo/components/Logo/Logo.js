import { COLORS } from '../../constants/COLORS.js'
import { getLogoContainer } from './getLogoContainer.js'
import { getSubText } from './getSubText.js'

/**
 *
 * @param {{color: COLORS, colorOnHover: COLORS, parentTag: 'h1' | 'h2', fontWeight: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900', logoSize: 'normal'}} param0
 */
export const Logo = ({
  color = COLORS.WHITE,
  parentTag = 'h1',
  fontWeight = '400',
  colorOnHover = COLORS.ORRANGE,
  logoSize = 'normal',
}) => {
  const { subTextWrapper, bambooImage } = getSubText({ color })

  /**
   *
   * @param {color: COLORS} color
   */
  const setBambooImage = color => {
    bambooImage.src = `/icons/bamboo-${color}.png`
  }

  const logo = getLogoContainer({
    color,
    colorOnHover,
    fontWeight,
    logoSize,
    parentTag,
    setBambooImage,
  })
  logo.append(subTextWrapper)

  return logo
}
