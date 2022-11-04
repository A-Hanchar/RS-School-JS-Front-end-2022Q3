import { generateElementWithClasses } from "../../../../../../utils/generateElementWithClasses.js"
import { DeadInformation } from "./DeadInformation/DeadInformation.js"

export const PandaCountDeads = () => {
  const wrapper = generateElementWithClasses({
    tagName: 'div',
    classNames: 'panda-count-deads'
  })

  const deadInformation = DeadInformation()

  const imagePanda = document.createElement('img')
  imagePanda.src = `/icons/panda.png`
  imagePanda.alt = 'Panda'

  wrapper.append(deadInformation, imagePanda)

  return wrapper
}