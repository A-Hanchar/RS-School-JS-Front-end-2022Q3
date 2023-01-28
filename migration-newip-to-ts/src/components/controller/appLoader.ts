import { API_KEY, BASE_URL } from './constants'
import Loader from './loader'

class AppLoader extends Loader {
  constructor() {
    super(BASE_URL, {
      apiKey: API_KEY,
    })
  }
}

export default AppLoader
