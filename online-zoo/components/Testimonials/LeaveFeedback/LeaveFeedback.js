import { COLORS } from '../../../constants/COLORS.js'
import { Button } from '../../Button/Button.js'

export const LeaveFeedback = () =>
  Button({
    fontWeight: '500',
    isUppercase: true,
    buttonColor: COLORS.ORRANGE,
    text: 'Leave feedback',
    buttonClassNames: 'testimonials-leave-feedback',
  })
