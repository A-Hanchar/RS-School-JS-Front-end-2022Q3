import { generateElementWithClasses } from '../../../../../../../utils/generateElementWithClasses.js'
import { amountValues } from './amountValues.js'

/**
 *
 * @param {{currencyType: 'US'}} param0
 */
export const useGetValues = ({ currencyType }) => {
  const amountValuesElements = new Array(amountValues.length)

  amountValues.forEach((value, index) => {
    const label = generateElementWithClasses({
      tagName: 'label',
      classNames: 'relative',
    })

    label.setAttribute('data-amaount-value', value[currencyType])

    const input = document.createElement('input')
    input.type = 'radio'
    input.name = 'amountRange'

    if (value.default) input.checked = true

    const circle = generateElementWithClasses({
      tagName: 'span',
      classNames: 'circle',
    })

    const amount = generateElementWithClasses({
      tagName: 'span',
      classNames: ['amount', 'fw-500', `type-${currencyType}`],
    })
    amount.innerText = value[currencyType]

    label.append(input, circle, amount)

    amountValuesElements[index] = label
  })

  return { amountValuesElements }
}
