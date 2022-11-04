import { generateElementWithClasses } from "../../../../utils/generateElementWithClasses.js"

export const BurgerButton = () => {
  const button = generateElementWithClasses({
    tagName: 'button',
    classNames: 'burger-button',
  })

  const burgerLines = document.createElement('span')

  button.append(burgerLines)

  return button
}