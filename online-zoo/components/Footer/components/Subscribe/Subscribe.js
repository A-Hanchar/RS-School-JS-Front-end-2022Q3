import { generateElementWithClasses } from '../../../../utils/generateElementWithClasses.js'
import { InputEmail } from './components/InputEmail/InputEmail.js'
import { SubmitButton } from './components/SubmitButton/SubmitButton.js'

export const Subscribe = () => {
  const form = generateElementWithClasses({
    tagName: 'form',
    classNames: 'subscribe',
  })

  const formTitle = generateElementWithClasses({
    tagName: 'h3',
    classNames: ['fw-400', 'text-white'],
  })
  formTitle.innerText = 'Subscribe to our news'

  /**
   *
   * @param {classList[]} classList
   * @param {boolean} disabled
   */
  const setColorAndBorderStyles = (classList, disabled) => {
    submit.classList.remove(
      ...[...submit.classList].filter(
        cssClass => cssClass.includes('text-') || cssClass.includes('border-'),
      ),
    )

    submit.classList.add(...classList)
    submit.disabled = disabled
  }

  const handleSubmit = event => {
    event.preventDefault()

    alert(`Email: ${inputEmailState.value}`)
  }

  const { component: inputEmail, inputEmailState } = InputEmail({
    onSuccess: () => setColorAndBorderStyles(['text-green', 'border-green'], false),
    onError: () => setColorAndBorderStyles(['text-red', 'border-red'], true),
  })

  const submit = SubmitButton({ onSubmit: handleSubmit })

  form.append(formTitle, inputEmail, submit)

  return form
}
