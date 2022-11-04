import { isClientWidthMore991 } from '../../utils/isClientWidthMore991.js'
import { Logo } from '../Logo/Logo.js'
import { Navigation } from '../Navigation/Navigation.js'

export const getHeaderContent = () => ({
  logo: Logo({}),
  navInfo: Navigation({ position: 'header' }),
  isShowNavigation: isClientWidthMore991(),
})
