import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import s from '../styles/loginPage.style'
import githubAuthHelper from '../githubAuthHelper';

import _ from 'lodash';
import $ from "jquery";


/*
*/
class LoginPage extends React.Component {
  static propTypes = {
    // children: PropTypes.element.isRequired,
    onGithubLogin: PropTypes.func.isRequired
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

  onClickLoginBtn() {
    githubAuthHelper.signIn((res, err) => {
      if (err) return;

      console.log(res);
      this.props.onGithubLogin(res.credential.accessToken);
    });
  }

  render() {
    return (
      <div>
        <div style={s.loginBtn}
          onClick={() => this.onClickLoginBtn()}>
          Login With Github
        </div>
      </div>
    );
  }




};


export default Radium(LoginPage);
