import { generateElementWithClasses } from '../../utils/generateElementWithClasses.js'

export const Popup = ({ popupContent, className }) => {
  const popupWrapper = generateElementWithClasses({
    tagName: 'div',
    classNames: ['popup-wrapper', 'bg-black-75', 'close', className].filter(Boolean),
  })

  const popupContentWrapper = generateElementWithClasses({
    tagName: 'div',
    classNames: ['popup-content-wrapper', 'relative'],
  })

  const closeButton = generateElementWithClasses({
    tagName: 'button',
    classNames: ['popup-close'],
  })

  const popupOpen = () => {
    document.body.append(popupWrapper)

    popupWrapper.classList.replace('close', 'open')
  }

  const popupClose = () => {
    popupWrapper.classList.replace('open', 'close')

    setTimeout(() => {
      popupWrapper.remove()
    }, 400)
  }

  popupWrapper.addEventListener('click', event => {
    const isPopupContentArea = event.composedPath().includes(popupContentWrapper)

    if (!isPopupContentArea) {
      popupClose()
    }
  })

  closeButton.addEventListener('click', popupClose)

  popupContentWrapper.append(popupContent)
  popupWrapper.append(popupContentWrapper, closeButton)

  return { popupClose, popupOpen }
}
