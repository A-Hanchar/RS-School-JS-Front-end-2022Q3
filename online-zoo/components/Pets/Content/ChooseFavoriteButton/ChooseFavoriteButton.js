import { COLORS } from "../../../../constants/COLORS.js";
import { Button } from "../../../Button/Button.js";

export const ChooseFavoriteButton = () => Button({
  fontWeight: '500',
  isUppercase: true,
  buttonColor: COLORS.ORRANGE,
  text: 'Choose your favorite',
  buttonClassNames: 'pets-choose-favorite'
})