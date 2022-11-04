import { generateElementWithClasses } from "../../../../../../utils/generateElementWithClasses.js"

export const TopInforamation = () => {
  const TITLE = 'The zoo has officially reopened but we still need your help!'
  const SUB_TITLE =
    'Even though the Zoo has been able to reopen, we are at a greatly reduced capacity with educational programs and public and private events cancelled or postponed for additional months. We need you now more than ever to help ensure that we overcome these challenges. We have been actively raising funds in the community, and we are grateful for the generosity. '
  
  const SUB_TITLE_ADD_INFORMATION = 'But much more support is still needed, and we need your help! Please consider a gift today – no matter what size – to help us sustain our mission.'

  const wrapper = generateElementWithClasses({
    tagName: 'div',
    classNames: 'top-information-wrapper'
  })

  const h2 = generateElementWithClasses({
    tagName: 'h2',
    classNames: ['fw-400', 'text-white', 'uppercase']
  })
  h2.innerText = TITLE

  const p = generateElementWithClasses({
    tagName: 'p',
    classNames: 'text-white'
  })
  p.innerText = SUB_TITLE

  const subTitleAddInforamtion = generateElementWithClasses({
    tagName: 'span',
    classNames: ['text-white', 'fw-500']
  })
  subTitleAddInforamtion.innerText = SUB_TITLE_ADD_INFORMATION

  p.append(subTitleAddInforamtion)

  const h3 = generateElementWithClasses({
    tagName: 'h3',
    classNames: ['fw-400', 'text-orrange']
  })
  h3.innerText = 'Donation Information'

  wrapper.append(h2, p, h3)

  return wrapper
}
