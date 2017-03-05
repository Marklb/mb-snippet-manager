import { createStore } from 'redux'
import appReducers from './reducers'

export const store = createStore(appReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store.getState());

