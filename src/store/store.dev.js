import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import freeze from 'redux-freeze'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

const logger = createLogger({
  level: 'info',
  collapsed: true,
})


/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
/* eslint-enable no-underscore-dangle */

const enhancer = composeEnhancers(
  applyMiddleware(thunk, logger, freeze)
)

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
    )
  }

  return store
}
