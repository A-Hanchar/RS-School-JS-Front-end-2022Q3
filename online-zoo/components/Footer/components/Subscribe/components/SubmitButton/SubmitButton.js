import { COLORS } from '../../../../../../constants/COLORS.js'
import { Button } from '../../../../../Button/Button.js'

/**
 *
 * @param {{onSubmit: () => void}} param0
 * @returns
 */
export const SubmitButton = ({ onSubmit }) =>
  Button({
    fontWeight: '400',
    text: 'Submit',
    borderRadius: 5,
    buttonClassNames: [
      'submit-button',
      `bg-${COLORS.GRAY_LIGHT.toLowerCase()}`,
      `text-${COLORS.ORRANGE.toLowerCase()}`,
    ],
    disabled: true,
    onClick: onSubmit,
  })
