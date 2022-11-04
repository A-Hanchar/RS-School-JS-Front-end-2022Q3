import { shuffle } from "../../../../utils/shuffle.js"
import { Card } from "./Card/Card.js"
import { cardAnimals } from "./cardAnimals.js"
import { useGetPaginationInfo } from "./useGetPaginationInfo.js"

export const useGetSliderContent = (sliderContent, page = 1) => {
  sliderContent.innerHTML = ''

  let { countElementsOnPage, totalElemets } = useGetPaginationInfo()
  let countShowCards = 0
  let currentIndex = page === 1 ? 0 : (page - 1) * countElementsOnPage

  const cardsList = []

  while (true) {
    const card = Card({ ...cardAnimals[currentIndex] })

    currentIndex++

    if (currentIndex > totalElemets - 1) {
      currentIndex = 0
    }

    cardsList.push(card)

    countShowCards++
    if (countShowCards === countElementsOnPage) break
  }

  shuffle(cardsList)
  sliderContent.append(...cardsList)
}
