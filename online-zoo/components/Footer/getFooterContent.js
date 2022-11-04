import { COLORS } from '../../constants/COLORS.js'
import { routes } from '../../constants/pages/pages.js'
import { isClientWidthMore991 } from '../../utils/isClientWidthMore991.js'
import { Button } from '../Button/Button.js'
import { Logo } from '../Logo/Logo.js'
import { Navigation } from '../Navigation/Navigation.js'
import { Author } from './components/Author/Author.js'
import { SocialLinks } from './components/SocialLinks/SocialLinks.js'
import { Subscribe } from './components/Subscribe/Subscribe.js'

export const getFooterContent = () => ({
  logo: Logo({ parentTag: 'h2' }),
  navigation: Navigation({ position: 'footer' }),
  socialLinks: SocialLinks(),
  author: Author(),
  donateButton: Button({
    buttonColor: COLORS.ORRANGE,
    isUppercase: true,
    fontWeight: '500',
    text: 'Donate for volunteers',
    onClick: () => {
      window.location.href = routes.donate
    },
    buttonClassNames: 'donate-button',
  }),
  subscribeInfo: {
    subscribe: Subscribe(),
    isShowSubscribe: isClientWidthMore991(),
  },
})
