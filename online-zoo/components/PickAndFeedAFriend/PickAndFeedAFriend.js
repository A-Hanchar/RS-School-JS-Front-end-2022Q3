import { generateElementWithClasses } from "../../utils/generateElementWithClasses.js"
import { Container } from "../Container/Container.js"
import { Content } from "./components/Content/Content.js"

/**
 * 
 * @param {{contentType: 'HowItWork' | 'FormContent'}} param0 
 */
export const PickAndFeedAFriend = ({contentType}) => {
  const section = generateElementWithClasses({
    tagName: 'section',
    classNames: ['pick-and-feed-a-friend', 'relative', 'bg-orrange-gradient']
  })
  const container = Container()

  const content = Content({contentType})

  container.append(content)
  section.append(container)

  return section
}