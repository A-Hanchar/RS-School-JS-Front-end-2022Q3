import { Callback, ENDPOINT } from '../../types'
import AppLoader from './appLoader'

class AppController extends AppLoader {
  getSources<DataCallbackType>(callback: Callback<DataCallbackType>) {
    super.getResp(
      {
        endpoint: ENDPOINT.SOURCES,
      },
      callback,
    )
  }

  getNews<DataCallbackType>(sourceId: string, callback: Callback<DataCallbackType>) {
    super.getResp(
      {
        endpoint: ENDPOINT.EVERYTHING,
        options: {
          sources: sourceId,
        },
      },
      callback,
    )
  }
}

export default AppController
