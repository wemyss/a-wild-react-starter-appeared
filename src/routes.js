import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'


const router = (
  <Route path='/'>
    <IndexRoute component={App} />
    <Route path='/test' component={App} />
  </Route>
)

export default router
