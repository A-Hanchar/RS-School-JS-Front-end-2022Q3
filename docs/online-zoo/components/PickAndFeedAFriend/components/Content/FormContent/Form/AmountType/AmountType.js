import { generateElementWithClasses } from '../../../../../../../utils/generateElementWithClasses.js'

export const AmountType = () => {
  const fieldset = generateElementWithClasses({
    tagName: 'fieldset',
    classNames: 'pick-and-feed-a-friend-form-amount-type',
  })

  const types = [
    {
      value: 'Monthly',
    },
    {
      value: 'Once',
      default: true,
    },
  ]

  types.forEach(type => {
    const label = generateElementWithClasses({
      tagName: 'label',
      classNames: ['relative', 'text-blueBlack', 'fw-400'],
    })
    label.innerText = type.value

    const input = document.createElement('input')
    input.type = 'radio'
    input.name = 'amountType'

    if (type.default) input.checked = true

    const span = document.createElement('span')

    label.append(input, span)
    fieldset.append(label)
  })

  return fieldset
}
