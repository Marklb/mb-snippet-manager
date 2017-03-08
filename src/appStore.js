import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk'
import appReducers from './reducers'

const middlewares = [thunk]

if (process.env.NODE_ENV !== `production`) {
  const createLogger = require(`redux-logger`);
  const logger = createLogger();
  middlewares.push(logger);
}

const initStore = () => {
  if (process.env.NODE_ENV !== `production`) {
    return compose(
      applyMiddleware(...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      autoRehydrate()
    )(createStore)(appReducers);
  }else{
    return compose(
      applyMiddleware(...middlewares),
      autoRehydrate()
    )(createStore)(appReducers);
  }
}

export const store = initStore()

import localforage from 'localForage'
const persistConfig = {
  storage: localforage
}
persistStore(store, persistConfig, () => {
  console.log('rehydration complete');
})

// Purge the persistant storage
// persistStore(store, config, callback).purge()


// console.log(store.getState());

