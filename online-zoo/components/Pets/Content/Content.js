import { generateElementWithClasses } from "../../../utils/generateElementWithClasses.js"
import { ChooseFavoriteButton } from "./ChooseFavoriteButton/ChooseFavoriteButton.js"
import { Slider } from "./Slider/Slider.js"

export const Content = () => {
  const contentWrapper = generateElementWithClasses({
    tagName: 'div',
    classNames: 'pets-content-wrapper'
  })

  const slider = Slider()
  const button = ChooseFavoriteButton()

  contentWrapper.append(slider, button)
  return contentWrapper
}