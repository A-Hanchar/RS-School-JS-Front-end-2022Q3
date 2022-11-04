import { generateElementWithClasses } from "../../../../../utils/generateElementWithClasses.js"
import { Form } from "./Form/Form.js"
import { PandaCountDeads } from "./PandaCountDeads/PandaCountDeads.js"
import { TopInforamation } from "./TopInformation/TopInforamation.js"

export const FormContent = () => {
  const formContentWrapper = generateElementWithClasses({
    tagName: 'div',
    classNames: 'form-content-wrapper'
  })

  const topInformation = TopInforamation()
  const pandaCountDeads = PandaCountDeads()
  const form = Form({currencyType: 'US'})

  formContentWrapper.append(pandaCountDeads, form)

  return {topInformation, formContentWrapper}
}