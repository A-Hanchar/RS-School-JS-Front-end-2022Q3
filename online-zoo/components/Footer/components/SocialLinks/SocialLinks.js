import { SOCIAL_LINKS } from '../../../../constants/SOCIAL_LINKS.js'
import { generateElementWithClasses } from '../../../../utils/generateElementWithClasses.js'
import { Link } from './components/Link/Link.js'

export const SocialLinks = () => {
  const socialLinks = [
    SOCIAL_LINKS.FACEBOOK,
    SOCIAL_LINKS.TWITTER,
    SOCIAL_LINKS.INSTAGRAM,
    SOCIAL_LINKS.YOUTUBE,
  ]

  const ul = generateElementWithClasses({
    tagName: 'ul',
    classNames: 'social-links',
  })

  socialLinks.forEach(({ id, path, title }) => {
    const li = document.createElement('li')

    li.append(Link({ id, path, title }))

    ul.append(li)
  })

  return ul
}
