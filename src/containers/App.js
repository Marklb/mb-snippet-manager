import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'
import s from '../styles/app.style'
import { connect } from 'react-redux'
import { githubLogin, setGithubInfo} from '../actions'
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
      authToken: PropTypes.string,
      displayName: PropTypes.string,
      email: PropTypes.string,
      photoURL: PropTypes.string
    }).isRequired,
    onGithubLogin: PropTypes.func.isRequired,
    setGithubInfo: PropTypes.func.isRequired
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
      console.log(user);
      if (user) {
        // user.getToken().then(function (idToken) {
        //   console.log(idToken);
        // });
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
    if (firebaseHelper.isAuthenticated()) {
      return (
        <div>
          {this.props.children}
        </div>
      );
    } else {
      return (
        <div>
          <LoginPage 
            onGithubLogin={this.props.onGithubLogin} 
            setGithubInfo={this.props.setGithubInfo} />
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
    },
    setGithubInfo: (info) => {
      dispatch(setGithubInfo(info))
    }
  }
}

// export default App;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Radium(App));
