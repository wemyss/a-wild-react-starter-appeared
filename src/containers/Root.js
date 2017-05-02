// @flow
import React from 'react'
import { Provider } from 'react-redux'

import router from '../router'

type RootType = {
  store: {},
}

export default function Root({ store }: RootType) {
  return (
    <Provider store={store}>
      {router}
    </Provider>
  )
}
