import { generateElementWithClasses } from '../../../../../../../utils/generateElementWithClasses.js'
import { amountValues } from '../AmountRange/amountValues.js'

/**
 *
 * @param {{currencyType: 'US'}} param0
 */
export const AnotherAmount = ({ currencyType }) => {
  const fieldset = generateElementWithClasses({
    tagName: 'fieldset',
    classNames: 'pick-and-feed-a-friend-form-another-amount',
  })

  const label = document.createElement('label')

  const input = document.createElement('input')
  input.type = 'number'
  input.name = 'anotherAmount'
  input.placeholder = 'Another amount'
  input.step = 1
  input.maxLength = 4

  const defaultValue = amountValues.find(item => item.default)[currencyType]

  input.value = defaultValue

  input.addEventListener('input', event => {
    const value = event.target.value

    input.value = value > -1 ? Math.abs(value) : 0

    if (value.length > input.maxLength) {
      input.value = value.slice(0, input.maxLength)
    }
  })

  const span = generateElementWithClasses({
    tagName: 'span',
    classNames: `type-${currencyType}`,
  })

  label.append(input, span)
  fieldset.append(label)

  return fieldset
}
