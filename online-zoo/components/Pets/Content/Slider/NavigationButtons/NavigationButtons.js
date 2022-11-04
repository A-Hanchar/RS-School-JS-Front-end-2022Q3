import { isClientWidthMore575 } from "../../../../../utils/isClientWidthMore575.js"
import { ButtonSliderNavigation } from "../../../../ButtonSliderNavigation/ButtonSliderNavigation.js"

export const NavigationButtons = () => {
  const prevButton = ButtonSliderNavigation({direction: 'left'})
  const nextButton = ButtonSliderNavigation({direction: 'right'})

  return {prevButton, nextButton, isRenderButton: isClientWidthMore575()}
}