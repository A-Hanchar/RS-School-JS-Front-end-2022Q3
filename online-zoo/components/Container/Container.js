import { generateElementWithClasses } from '../../utils/generateElementWithClasses.js'

export const Container = () =>
  generateElementWithClasses({
    tagName: 'div',
    classNames: 'container',
  })
