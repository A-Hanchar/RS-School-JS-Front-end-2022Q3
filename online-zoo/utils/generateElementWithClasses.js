/**
 *
 * @param {{tagName: HTMLElementTagNameMap, classNames: string | string[]}} param0
 */
export const generateElementWithClasses = ({ tagName, classNames }) => {
  const tag = document.createElement(tagName)

  if (Array.isArray(classNames)) tag.classList.add(...classNames)
  if (typeof classNames === 'string') tag.classList.add(classNames)

  return tag
}
