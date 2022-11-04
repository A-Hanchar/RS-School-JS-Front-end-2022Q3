import { Footer } from '../../components/Footer/Footer.js'
import { Header } from '../../components/Header/Header.js'
import { Pets } from '../../components/Pets/Pets.js'
import { PickAndFeedAFriend } from '../../components/PickAndFeedAFriend/PickAndFeedAFriend.js'
import { Testimonials } from '../../components/Testimonials/Testimonials.js'
import { TopPanda } from '../../components/TopPanda/TopPanda.js'
import { COLORS } from '../../constants/COLORS.js'
import { removePreloader } from '../../utils/removePreloader.js'

removePreloader()

const header = Header({})
const footer = Footer()

const pandaSection = TopPanda({
  content: { 
    title: 'Watch your favorite animal online', 
    circleColor: COLORS.ORRANGE 
  },
  highlight: {
    color: COLORS.YELLOW,
    text: 'favorite'
  }
})

const pets = Pets()
const pickAndFeedAFriend = PickAndFeedAFriend({contentType: 'HowItWork'})
const testimonials = Testimonials()

const main = document.querySelector('main')
main.before(header)
main.prepend(pandaSection)
main.append(pets, pickAndFeedAFriend, testimonials)
main.after(footer)