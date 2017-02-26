import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';

import $ from "jquery";



class GithubAuthCallback extends React.Component {
  static propTypes = {

  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentWillUnmount() {

  }

  componentWillMount() {
    // let url = window.location + '';
    // let code = url.split('code=');
    // code = code[1];
    const params = this.getJsonFromUrl();
    console.log(params);
    if(params['code']){
      let client_id = 'b98b74eef1ea5236ecc3';
      let client_secret = '04e5650fbd619ce73d8c5cb019b4de46ffb45c6d';
      let code = params['code'];
      let url = `https://github.com/login/oauth/access_token`;
      let urlParams = `client_id=${client_id}`;
      urlParams = `${urlParams}&client_secret=${client_secret}`;
      urlParams = `${urlParams}&code=${code}`;
      // urlParams = `${urlParams}&redirect_uri=http://localhost:8080/github_auth_callback`;
      console.log(`Url: ${urlParams}`);
      // window.location = `${url}?${urlParams}`;

      $.post(url, {
        client_id: client_id,
        client_secret: '04e5650fbd619ce73d8c5cb019b4de46ffb45c6d',
        code: params['code']
      })
      .done(function( data ) {
        alert( "Data Loaded: " + data );
      });

    }
    // console.log(`Code: ${code}`);
  }

  render() {
    console.log(`Code: GithubAuthCallback`);
    const st = {color: 'white'};
    return (
      <div style={st}>Github Authentication Callback</div>
    );
  }

  getJsonFromUrl() {
    var query = location.search.substr(1);
    var result = {};
    query.split("&").forEach(function(part) {
      var item = part.split("=");
      result[item[0]] = decodeURIComponent(item[1]);
    });
    return result;
  }

};


const routes = (
  <Route path="/mb-snippet-manager/" component={App}>
    <IndexRoute component={Home} />

    <Route path="/mb-snippet-manager/github_auth_callback" component={GithubAuthCallback} />

    <Route path="*" component={PageNotFound} />
  </Route>
);


render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root'),
);
