import { generateElementWithClasses } from '../../../../../../../utils/generateElementWithClasses.js'
import { isClientWidthMore1199 } from '../../../../../../../utils/isClientWidthMore1199.js'
import { isClientWidthMore767 } from '../../../../../../../utils/isClientWidthMore767.js'
import { useGetValues } from './useGetValues.js'

/**
 *
 * @param {{currencyType: 'US'}} param0
 */
export const AmountRange = ({ currencyType }) => {
  const LEGENT_TITLE = 'Amount'

  const fieldset = generateElementWithClasses({
    tagName: 'fieldset',
    classNames: 'pick-and-feed-a-friend-form-amount-range-wrapper',
  })

  const legend = document.createElement('legend')
  legend.innerText = LEGENT_TITLE

  // amountValuesElements.length === 8 !!!
  let [isRemoveFor767, isRemoveFor1199] = [!isClientWidthMore767(), !isClientWidthMore1199()]
  const { amountValuesElements } = useGetValues({ currencyType })

  const progressBarWrapper = generateElementWithClasses({
    tagName: 'div',
    classNames: ['pick-and-feed-a-friend-form-amount-range', 'relative'],
  })

  for (let i = amountValuesElements.length - 1; i > 2; i--) {
    progressBarWrapper.prepend(amountValuesElements[i])
  }

  const renderAmountRangeValues = (from, to) => {
    for (let i = from; i >= to; i--) {
      progressBarWrapper.prepend(amountValuesElements[i])
    }
  }

  let start = amountValuesElements.length - 1
  let end = 3

  if (!isRemoveFor767) {
    end = 1
  }

  if (!isRemoveFor1199) {
    end = 0
  }

  renderAmountRangeValues(start, end)

  addEventListener('resize', () => {
    if (!isClientWidthMore767() && isRemoveFor767) {
      for (let i = 0; i <= 2; i++) {
        amountValuesElements[i].remove()
      }

      isRemoveFor767 = false

      return
    }

    if (isClientWidthMore767() && !isRemoveFor767) {
      renderAmountRangeValues(2, 1)

      isRemoveFor767 = true

      return
    }

    if (!isClientWidthMore1199() && isRemoveFor1199) {
      amountValuesElements[0].remove()

      isRemoveFor1199 = false

      return
    }

    if (isClientWidthMore1199() && !isRemoveFor1199) {
      renderAmountRangeValues(0, 0)

      isRemoveFor1199 = true

      return
    }
  })

  fieldset.append(legend, progressBarWrapper)

  return fieldset
}
