import { routes } from "../../../../../../constants/pages/pages.js"
import { generateElementWithClasses } from "../../../../../../utils/generateElementWithClasses.js"

export const Description = () => {
  const [p1, p2] = [
    'During a time when the COVID-19 epidemic is touching all of our lives, we’re proud and glad that people around the world find joy in PetStory.',
    'Even though the zoo has reopened, we need you now more than ever to help us deal with these problems. Please consider a gift to our Emergency Support Fund .'
  ]

  const linkTitle = 'Emergency Support Fund'

  const link = generateElementWithClasses({
    tagName: 'a',
    classNames: ['text-blueBlack', 'relative']
  })
  link.innerText = linkTitle
  link.href = routes.donate

  const descriptionWrapper = generateElementWithClasses({
    tagName: 'div',
    classNames: 'description-wrapper'
  })

  const p1Wrapper = generateElementWithClasses({
    tagName: 'p',
    classNames: ['fw-500', 'text-blueBlack']
  })
  p1Wrapper.innerText = p1

  const p2Wrapper = generateElementWithClasses({
    tagName: 'p',
    classNames: 'text-blueBlack'
  })
  
  const updatedP2 = p2.replace(linkTitle, link.outerHTML)
  p2Wrapper.innerHTML = updatedP2

  descriptionWrapper.append(p1Wrapper, p2Wrapper)

  return descriptionWrapper
}