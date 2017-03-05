import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'
import s from '../styles/app.style'
import { connect } from 'react-redux'
import { GITHUB_LOGIN, githubLogin } from '../actions'
import githubAuthHelper from '../githubAuthHelper'
import * as firebase from 'firebase'
import * as firebaseHelper from '../common/helpers/firebase-helper'

import LoginPage from '../components/LoginPage'

import _ from 'lodash'
import $ from "jquery"

require("../styles/app.scss");


/*
*/
class App extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    githubAuth: PropTypes.shape({
      authToken: PropTypes.string
    }).isRequired,
    onGithubLogin: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      uid: null
    };

  }

  componentDidMount() {
    // const info = githubAuthHelper.getUserInfo();
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        window.localStorage.setItem(firebaseHelper.storageKey, user.uid);
        this.setState({ uid: user.uid });
      } else {
        window.localStorage.removeItem(firebaseHelper.storageKey);
        this.setState({ uid: null });
      }
    });
  }

  componentWillUnmount() {

  }

  componentWillMount() {

  }

  render() {
    if (this.props.githubAuth.authToken) {
      return (
        <div>
          {this.props.children}
        </div>
      );
    } else {
      return (
        <div>
          <LoginPage onGithubLogin={this.props.onGithubLogin} />
        </div>
      );
    }
  }

  /*
  Event Callbacks
  */


};



const mapStateToProps = (state) => {
  return {
    githubAuth: state.githubAuth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGithubLogin: (authToken) => {
      console.log(`Yo: ${authToken}`);
      dispatch(githubLogin(authToken))
    }
  }
}

// export default App;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Radium(App));
