export const removePreloader = () => {
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.body.removeAttribute('data-page-is-loaded')

      document.querySelector('.preloader').remove()
    }, 1000)
  })
}
