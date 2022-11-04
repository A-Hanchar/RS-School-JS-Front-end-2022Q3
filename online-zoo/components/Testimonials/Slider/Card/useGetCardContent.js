import { generateElementWithClasses } from '../../../../utils/generateElementWithClasses.js'

/**
 *
 * @param {{firstName: string, lastName: string, avatar?: {src: string}, text: string, habitat: string, writingTime: string}} param0
 */
export const useGetCardContent = (
  containerForRender,
  { firstName, lastName, avatar, text, habitat, writingTime },
) => {
  const fullName = `${firstName} ${lastName}`

  const h3 = generateElementWithClasses({
    tagName: 'h3',
    classNames: ['full-name', 'fw-400', 'text-black'],
  })
  h3.innerText = fullName

  const avatarImage = generateElementWithClasses({
    tagName: 'img',
    classNames: 'avatar',
  })
  avatarImage.src = avatar?.src ?? `/icons/no-user-avatar.png`
  avatarImage.alt = fullName

  const locationAndTime = generateElementWithClasses({
    tagName: 'p',
    classNames: ['location-and-time', 'fw-300', 'text-gray4'],
  })

  const locationAndTimeContent = [habitat, '\u2219', writingTime]
  locationAndTimeContent.forEach((item, index) => {
    const span = document.createElement('span')

    span.innerText = index === 0 ? `Local ${item}` : item

    locationAndTime.append(span)
  })

  const testimonialText = generateElementWithClasses({
    tagName: 'p',
    classNames: ['testimonial-text', 'text-gray'],
  })
  testimonialText.innerText = text

  containerForRender.append(avatarImage, h3, locationAndTime, testimonialText)
}
