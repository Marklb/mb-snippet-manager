import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'
import s from '../styles/menuAccountDropdown.style'
import { connect } from 'react-redux'
import { githubLogOut } from '../actions/githubActions'
import * as axios from 'axios'

import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';

// require("../styles/menu-account-dropdown.scss");

/*
*/
class MenuAccountDropdown extends React.Component {
  static propTypes = {
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
    githubLogOut: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };

    this.selected = [];

    this.onVisibleChange = this.onVisibleChange.bind(this);
    this.saveSelected = this.saveSelected.bind(this);
    this.confirm = this.confirm.bind(this);
    this.onClickSettings = this.onClickSettings.bind(this);
    this.onClickLogout = this.onClickLogout.bind(this);
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {

  }

  componentWillMount() {

  }

  onVisibleChange(visible) {
    this.setState({
      visible,
    });
  }

  saveSelected({ selectedKeys }) {
    this.selected = selectedKeys;
  }

  confirm() {
    // const token = window.localStorage.getItem('github_token');
    // console.log(token);
    // var config = {
    //   headers: { 'Authorization': `token ${token}` }
    // };
    // // axios.get('"https://api.github.com/users', {
    // //   params: {
    // //     ID: 8348647
    // //   }
    // // })
    // // axios.get('https://api.github.com/users/marklb')
    // axios.get('https://api.github.com/user/8348647')
    // // axios.get('https://api.github.com/users')
    axios.get('https://api.github.com/user/8348647', config)
    .then(function (response) {
      // console.log('resppp');
      // console.log(response);
    })
    .catch(function (error) {
      // console.log(error);
    });
    firebase.auth().getRedirectResult().then(function (result) {
      if (result.credential) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;
      // console.log(result);
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  onClickSettings() {
    // var provider = new firebase.auth.GithubAuthProvider();
    // provider.addScope('user');
    // provider.addScope('gist');
    // firebase.auth().signInWithRedirect(provider);
  }

  onClickLogout() {
    // githubAuthHelper.signOut();
    this.props.githubLogOut();
    this.setState({
      visible: false,
    });
  }

  render() {
    // const username = '<username>';
    // console.log(githubAuthHelper.getUserInfo());
    // const username = githubAuthHelper.getUserInfo().username;
    const username = this.props.githubAuth.username;

    const menu = (
      <Menu
        style={s.dropdown}
        multiple
        onSelect={this.saveSelected}
        onDeselect={this.saveSelected}
      >
        <MenuItem disabled style={{ padding: '0' }}>
          <button
            key="0"
            style={s.menuBtn}
            onClick={this.confirm}
          >Profile
          </button>
        </MenuItem>
        <MenuItem disabled style={{ padding: '0' }}>
          <button
            key="1"
            style={s.menuBtn}
            onClick={this.onClickSettings}
          >Settings
          </button>
        </MenuItem>
        <Divider />
        <MenuItem disabled style={{padding: '0'}}>
          <button
            key="2"
            style={s.menuBtn}
            onClick={this.onClickLogout}
          >Logout
          </button>
        </MenuItem>
      </Menu>
    );

    return (
      <Dropdown
        trigger={['click']}
        onVisibleChange={this.onVisibleChange}
        visible={this.state.visible}
        closeOnSelect={false}
        overlay={menu}
        animation="slide-up"
      >
        <button style={s.activatorBtn}>{username}</button>
      </Dropdown>
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
    githubLogOut: () => {
      dispatch(githubLogOut())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Radium(MenuAccountDropdown));
