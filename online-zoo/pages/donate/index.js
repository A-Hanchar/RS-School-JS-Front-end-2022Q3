import { Footer } from '../../components/Footer/Footer.js'
import { Header } from '../../components/Header/Header.js'
import { PickAndFeedAFriend } from '../../components/PickAndFeedAFriend/PickAndFeedAFriend.js'
import { TopPanda } from '../../components/TopPanda/TopPanda.js'
import { removePreloader } from '../../utils/removePreloader.js'

removePreloader()

const header = Header({})
const footer = Footer()

const pandaSection = TopPanda({})
const pickAndFeedAFriend = PickAndFeedAFriend({contentType: 'FormContent'})

const main = document.querySelector('main')
main.before(header)
main.append(pandaSection, pickAndFeedAFriend)
main.after(footer)


