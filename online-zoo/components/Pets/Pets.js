import { generateElementWithClasses } from "../../utils/generateElementWithClasses.js"
import { Container } from "../Container/Container.js"
import { Content } from "./Content/Content.js"

export const Pets = () => {
  const pets = generateElementWithClasses({
    tagName: 'section',
    classNames: 'section-pets'
  })

  const container = Container()

  const content = Content()

  container.append(content)
  pets.append(container)

  return pets
}