import { COLORS } from '../../../../../../../constants/COLORS.js'
import { Button } from '../../../../../../Button/Button.js'

export const SubmitButton = () => {
  const onClick = event => {
    event.preventDefault()

    alert('Nothing doing')
  }

  const submitButton = Button({
    fontWeight: '500',
    isUppercase: true,
    buttonColor: COLORS.ORRANGE,
    text: 'Feed a friend now',
    onClick,
    buttonClassNames: 'pick-and-feed-a-friend-form-submit-button',
  })

  submitButton.type = 'submit'

  return submitButton
}
