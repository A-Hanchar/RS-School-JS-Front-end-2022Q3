import { generateElementWithClasses } from '../../../../../../utils/generateElementWithClasses.js'
import { AmountRange } from './AmountRange/AmountRange.js'
import { AmountType } from './AmountType/AmountType.js'
import { AnotherAmount } from './AnotherAmount/AnotherAmount.js'
import { ShareText } from './ShareText/ShareText.js'
import { SubmitButton } from './SubmitButton/SubmitButton.js'

/**
 *
 * @param {{currencyType: 'US'}} param0
 */
export const Form = ({ currencyType }) => {
  const form = generateElementWithClasses({
    tagName: 'form',
    classNames: 'pick-and-feed-a-friend-form',
  })

  const amountRange = AmountRange({ currencyType })
  const anotherAmount = AnotherAmount({ currencyType })

  const anotherAmountInput = anotherAmount.querySelector('input')

  amountRange.addEventListener('change', () => {
    const parentLabel = amountRange.querySelector('label input:checked').closest('label')

    const value = Number(parentLabel.getAttribute('data-amaount-value'))

    anotherAmountInput.value = value
  })

  anotherAmount.addEventListener('input', event => {
    const label = amountRange.querySelector(`label[data-amaount-value='${event.target.value}']`)
    const activeLabel = amountRange.querySelector('label input:checked')

    if (activeLabel) {
      activeLabel.checked = false
    }

    if (!label) {
      return
    }

    label.querySelector('input').checked = true
  })

  form.append(amountRange, anotherAmount, AmountType(), SubmitButton(), ShareText())

  return form
}
