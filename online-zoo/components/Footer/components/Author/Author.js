import { generateElementWithClasses } from '../../../../utils/generateElementWithClasses.js'

export const Author = () => {
  const designedBy = 'Designed by Alisa Samborskaya'
  const rsSchool = '\u00A9RSSchool & \u00A9Yem Digital 2021'

  const div = generateElementWithClasses({
    tagName: 'div',
    classNames: 'author-content-wrapper',
  })

  /**
   *
   * @param {string} text
   */
  const createText = text => {
    const p = generateElementWithClasses({ tagName: 'p', classNames: ['fw-100', 'text-white-50'] })

    p.innerText = text

    return p
  }

  div.append(createText(designedBy), createText(rsSchool))

  return div
}
