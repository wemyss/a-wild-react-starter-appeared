import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './containers/App'
import Footer from './components/Footer'


const NotFound = () => (
  <div>
    <h1 className='title'>404 NOT FOUND</h1>
  </div>
)
const router = (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={App} />
      <Route path='/footer' exact component={Footer} />

      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default router
