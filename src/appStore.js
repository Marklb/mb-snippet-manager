import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import appReducers from './reducers'

const middlewares = [thunk];

const isProduction = process.argv.indexOf('-p') !== -1;

// if (process.env.NODE_ENV === `development`) {
if (!!isProduction) {
  const createLogger = require(`redux-logger`);
  const logger = createLogger();
  middlewares.push(logger);
}


export const store = compose(
  applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )(createStore)(appReducers);

// export const store = createStore(
//   appReducers,
//   applyMiddleware(
//     thunk,
//     logger
//   ),
//   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

console.log(store.getState());

