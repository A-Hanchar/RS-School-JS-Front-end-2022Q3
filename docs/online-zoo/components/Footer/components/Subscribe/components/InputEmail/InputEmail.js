import { COLORS, COLORS_VALUES } from '../../../../../../constants/COLORS.js'
import { converterPxToRem } from '../../../../../../utils/converterPxToRem.js'
import { generateElementWithClasses } from '../../../../../../utils/generateElementWithClasses.js'

/**
 *
 * @param {{onError?: () => void, onSuccess?: () => void}} param0
 * @returns
 */
export const InputEmail = ({ onError, onSuccess }) => {
  const inputEmailState = {
    value: '',
  }

  const input = generateElementWithClasses({
    tagName: 'input',
    classNames: ['subscribe-email', 'placeholder-gray4', 'text-orrange', 'border-orrange'],
  })
  input.type = 'email'
  input.placeholder = 'Enter your email'

  input.addEventListener('input', event => {
    const validator = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

    inputEmailState.value = event.target.value

    input.classList.remove(
      ...[...input.classList].filter(
        cssClass => cssClass.includes('text-') || cssClass.includes('border-'),
      ),
    )

    if (!!inputEmailState.value.match(validator)) {
      input.classList.add('text-green', 'border-green')

      onSuccess?.()

      return
    }

    input.classList.add('text-red', 'border-red')

    onError?.()
  })

  return { component: input, inputEmailState }
}
