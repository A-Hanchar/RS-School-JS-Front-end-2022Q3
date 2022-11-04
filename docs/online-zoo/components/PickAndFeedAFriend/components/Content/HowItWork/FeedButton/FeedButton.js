import { COLORS } from '../../../../../../constants/COLORS.js'
import { routes } from '../../../../../../constants/pages/pages.js'
import { Button } from '../../../../../Button/Button.js'

export const FeedButton = () =>
  Button({
    buttonColor: COLORS.ORRANGE,
    isUppercase: true,
    fontWeight: '500',
    text: 'Feed a friend now',
    onClick: () => {
      window.location.href = routes.donate
    },
    buttonClassNames: ['how-it-work-feed-button', 'ml-auto', 'mr-auto'],
  })
