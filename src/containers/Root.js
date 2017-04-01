// @flow
import React from 'react'
import { Provider } from 'react-redux'
import { browserHistory, Router } from 'react-router'

import routes from '../routes'

type RootType = {
  store: {},
}

export default function Root({ store }: RootType) {
  return (
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)} />
    </Provider>
  )
}
