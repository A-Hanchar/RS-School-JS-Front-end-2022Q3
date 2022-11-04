import { COLORS } from '../../constants/COLORS.js'
import { generateElementWithClasses } from '../../utils/generateElementWithClasses.js'

/**
 *
 * @param {
    {
      fontWeight: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900', 
      isUppercase?: boolean, 
      buttonColor?: COLORS, 
      text: string, 
      onClick?: () => void, 
      buttonClassNames?: string | string[], 
      disabled?: Boolean}
    } param0
 * @returns
 */
export const Button = ({
  fontWeight = '500',
  isUppercase,
  buttonColor,
  text,
  onClick = () => {},
  buttonClassNames,
  disabled,
}) => {
  const generateButtonCssClasses = () => {
    const classes = [`fw-${fontWeight}`, 'button-common-styles']

    if (buttonColor) classes.push(`button-${buttonColor}`)
    if (isUppercase) classes.push('uppercase')

    if (buttonClassNames) {
      if (Array.isArray(buttonClassNames)) classes.push(...buttonClassNames)
      if (typeof buttonClassNames === 'string') classes.push(buttonClassNames)
    }

    return classes
  }

  const button = generateElementWithClasses({
    tagName: 'button',
    classNames: generateButtonCssClasses(),
  })

  button.innerText = text

  button.addEventListener('click', onClick)

  button.disabled = !!disabled

  return button
}
