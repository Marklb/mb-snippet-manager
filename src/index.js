import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './appStore'
import { appLink } from './common/app-utils'

import App from './containers/App'
import Home from './components/Home'
import Manager from './containers/Manager'
import LoginPage from './components/LoginPage'
import PageNotFound from './components/PageNotFound'

// http://codemirror.net/
// https://www.npmjs.com/package/codemirror
// https://github.com/JedWatson/react-codemirror

// import githubAuthHelper from '../githubAuthHelper'
// import firebase from 'firebase'
// import * as firebaseHelper from '../common/helpers/firebase-helper'

// const requireAuth = (nextState, replace) => {
//   if (!auth.isAdmin()) {
//     // Redirect to Home page if not an Admin
//     replace({ pathname: '/' })
//   }
// }

const routes = (
  <Route>
    <Route path={appLink("/")} component={App}>
      <IndexRoute component={Home} />

      <Route path={appLink("/manager")} component={Manager}>

      </Route>

    </Route>
    <Route path="*" component={PageNotFound} />
  </Route>
);
      // <Route path={appLink("/login")} component={LoginPage} />


render(
  <Provider store={store}>
    <Router
      history={browserHistory}
      routes={routes}
    />
  </Provider>,
  document.getElementById('root'),
);
