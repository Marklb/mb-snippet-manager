import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'
// import s from '../styles/manager.style'
import { connect } from 'react-redux'
import { GITHUB_AUTH_INIT, githubAuthInit } from '../actions/githubActions'
import githubAuthHelper from '../githubAuthHelper'
import firebase from 'firebase'
import * as firebaseHelper from '../common/helpers/firebase-helper'
import * as axios from 'axios'


/*
*/
class Manager extends React.Component {
  static propTypes = {
    
  };

  constructor(props) {
    super(props);

    this.state = {
      
    };

  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  componentWillMount() {

  }

  render() {
    console.log('manager');
    return (
      <div></div>
    );
  }

};



const mapStateToProps = (state) => {
  return {
    githubAuth: state.githubAuth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGithubLogin: (authToken) => {
      dispatch(githubLogin(authToken))
    },
    githubAuthInit: () => {
      dispatch(githubAuthInit())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Radium(Manager));
