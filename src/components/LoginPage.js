import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import s from '../styles/loginPage.style'
// import githubAuthHelper from '../githubAuthHelper';
import { APP_NAME } from '../common/constants'


/*
*/
class LoginPage extends React.Component {
  static propTypes = {
    // children: PropTypes.element.isRequired,
    onLoginBtnClick: PropTypes.func.isRequired,
    // setGithubInfo: PropTypes.func.isRequired
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
    // console.log('this.props.setGithubInfo');
    // console.log(this.props.setGithubInfo);
    // githubAuthHelper.signIn((res, err) => {
    //   if (err) return;

    //   console.log(res);
    //   this.props.onGithubLogin(res.credential.accessToken);
    // }, this.props.setGithubInfo);
  }

  render() {
    return (
      <div style={s.container}>
        <p key="0" style={s.title}>{APP_NAME}</p>
        <div style={s.loginBtn}
          onClick={this.props.onLoginBtnClick}>
          Login With Github
        </div>
      </div>
    );
  }




};


export default Radium(LoginPage);
