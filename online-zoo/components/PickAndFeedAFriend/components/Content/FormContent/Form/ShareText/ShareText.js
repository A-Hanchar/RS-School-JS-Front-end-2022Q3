import { generateElementWithClasses } from '../../../../../../../utils/generateElementWithClasses.js'

export const ShareText = () => {
  const shareText = generateElementWithClasses({
    tagName: 'p',
    classNames: ['pick-and-feed-a-friend-form-share-text', 'text-blueBlack'],
  })
  shareText.innerText = 'Share with your friends on social networks '

  return shareText
}
