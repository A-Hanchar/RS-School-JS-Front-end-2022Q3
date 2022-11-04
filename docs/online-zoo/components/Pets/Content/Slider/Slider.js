import { generateElementWithClasses } from '../../../../utils/generateElementWithClasses.js'
import { isClientWidthMore575 } from '../../../../utils/isClientWidthMore575.js'
import { isClientWidthMore991 } from '../../../../utils/isClientWidthMore991.js'
import { NavigationButtons } from './NavigationButtons/NavigationButtons.js'
import { useGetPaginationInfo } from './useGetPaginationInfo.js'
import { useGetSliderContent } from './useGetSliderContent.js'

export const Slider = () => {
  const sliderContainer = generateElementWithClasses({
    tagName: 'div',
    classNames: ['pets-slider-wrapper', 'relative'],
  })

  const sliderContent = generateElementWithClasses({
    tagName: 'div',
    classNames: 'pets-slider-content',
  })

  let { prevButton, nextButton, isRenderButton } = NavigationButtons()

  sliderContainer.append(sliderContent)

  if (isRenderButton) {
    sliderContainer.append(prevButton, nextButton)
  }

  useGetSliderContent(sliderContent)

  let { totalPages, isCountElementsOnPage6 } = useGetPaginationInfo()
  let currentPage = 1

  const disableButtons = (time = 1500) => {
    nextButton.disabled = true
    prevButton.disabled = true

    setTimeout(() => {
      nextButton.disabled = false
      prevButton.disabled = false
    }, time)
  }

  prevButton.addEventListener('click', event => {
    event.preventDefault()

    disableButtons()

    const newPage = currentPage - 1
    currentPage = newPage === 0 ? totalPages : newPage

    useGetSliderContent(sliderContent, currentPage)
  })

  nextButton.addEventListener('click', event => {
    event.preventDefault()

    disableButtons()

    const newPage = currentPage + 1
    currentPage = newPage > totalPages ? 1 : newPage

    useGetSliderContent(sliderContent, currentPage)
  })

  addEventListener('resize', () => {
    if (isClientWidthMore575() && !isRenderButton) {
      sliderContainer.append(prevButton, nextButton)

      isRenderButton = true
    }

    if (!isClientWidthMore575() && isRenderButton) {
      prevButton.remove()
      nextButton.remove()

      isRenderButton = false
    }

    if (isClientWidthMore991() && !isCountElementsOnPage6) {
      useGetSliderContent(sliderContent, currentPage)

      isCountElementsOnPage6 = true
    }

    if (!isClientWidthMore991() && isCountElementsOnPage6) {
      useGetSliderContent(sliderContent, currentPage)

      isCountElementsOnPage6 = false
    }
  })

  return sliderContainer
}
