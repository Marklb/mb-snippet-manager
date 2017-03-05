import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
// import { createStore } from 'redux'
import { store } from './appStore'

import $ from 'jquery'

// import appReducers from './reducers'
import { appLink } from './common/app-utils'

import App from './containers/App'
import Home from './components/Home'
import PageNotFound from './components/PageNotFound'

// http://codemirror.net/
// https://www.npmjs.com/package/codemirror
// https://github.com/JedWatson/react-codemirror

const routes = (
  <Route path={appLink("/")} component={App}>
    <IndexRoute component={Home} />


    <Route path="*" component={PageNotFound} />
  </Route>
);

// https://github.com/gaearon/redux-devtools#setup-instructions
// https://github.com/zalmoxisus/redux-devtools-extension
// const store = createStore(appReducers, 
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// console.log(store.getState());

render(
  <Provider store={store}>
    <Router
      history={browserHistory}
      routes={routes}
    />
  </Provider>,
  document.getElementById('root'),
);
