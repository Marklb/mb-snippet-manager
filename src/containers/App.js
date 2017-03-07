import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'
import s from '../styles/app.style'
import { connect } from 'react-redux'
// import { githubLogin, setGithubInfo} from '../actions'
import { githubLogin, githubAuthInit } from '../actions/githubActions'
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
      isInitializing: PropTypes.bool,
      isLoggingIn: PropTypes.bool,
      isLoggedIn: PropTypes.bool,
      accessToken: PropTypes.string,
      displayName: PropTypes.string,
      firbase_uid: PropTypes.string,
      avatar_url: PropTypes.string,
      login: PropTypes.string,
      username: PropTypes.string,
      email: PropTypes.string,
      bio: PropTypes.string,
      events_url: PropTypes.string,
      private_gists: PropTypes.number,
      github_id: PropTypes.number,
      public_gists: PropTypes.number,
      url: PropTypes.string,
    }).isRequired,
    githubLogin: PropTypes.func.isRequired,
    githubSignOut: PropTypes.func.isRequired,
    githubAuthInit: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      // uid: null
    };

  }

  componentDidMount() {
    // const info = githubAuthHelper.getUserInfo();
    // firebase.auth().onAuthStateChanged(user => {
    //   // console.log(user);
    //   if (user) {
    //     // user.getToken().then(function (idToken) {
    //     //   console.log(idToken);
    //     // });
    //     window.localStorage.setItem(firebaseHelper.storageKey, user.uid);
    //     this.setState({ uid: user.uid });
    //   } else {
    //     window.localStorage.removeItem(firebaseHelper.storageKey);
    //     this.setState({ uid: null });
    //   }
    // });
  }

  componentWillUnmount() {

  }

  componentWillMount() {
    console.log('componentWillMount');
    this.props.githubAuthInit();
  }

  render() {
    /*return (
      <div>
        {this.props.children}
      </div>
    );*/
    // if (firebaseHelper.isAuthenticated()) {
    if (this.props.githubAuth.isLoggedIn) {
      return (
        <div>
          {this.props.children}
        </div>
      );
    } else {
      return (<LoginPage onLoginBtnClick={this.props.githubLogin} />);
    }
  }

};



const mapStateToProps = (state) => {
  return {
    githubAuth: state.githubAuth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    githubLogin: () => {
      dispatch(githubLogin())
    },
    githubSignOut: () => {
      dispatch(githubSignOut());
    },
    githubAuthInit: () => {
      dispatch(githubAuthInit())
    },
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Radium(App));
