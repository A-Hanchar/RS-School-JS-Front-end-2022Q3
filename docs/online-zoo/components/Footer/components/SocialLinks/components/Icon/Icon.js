import { generateElementWithClasses } from '../../../../../../utils/generateElementWithClasses.js'

/**
 *
 * @param {{id: string, title: string}} param0
 * @returns
 */
export const Icon = ({ id, title }) => {
  const div = generateElementWithClasses({
    tagName: 'div',
    classNames: ['social-link-icon', 'bg-gray-50', 'relative'],
  })

  const icon = document.createElement('img')
  icon.src = `/icons/${id}-white.png`
  icon.alt = title

  div.append(icon)

  return div
}
