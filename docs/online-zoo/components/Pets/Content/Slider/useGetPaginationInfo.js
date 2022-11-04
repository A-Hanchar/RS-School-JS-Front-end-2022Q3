import { isClientWidthMore991 } from '../../../../utils/isClientWidthMore991.js'
import { cardAnimals } from './cardAnimals.js'

export const useGetPaginationInfo = () => {
  const totalElemets = cardAnimals.length

  let isCountElementsOnPage6 = isClientWidthMore991()
  let countElementsOnPage = isCountElementsOnPage6 ? 6 : 4

  let totalPages = Math.ceil(totalElemets / countElementsOnPage)

  return {
    totalElemets,
    totalPages,
    countElementsOnPage,
    isCountElementsOnPage6
  }
}
