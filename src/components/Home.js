import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import s from '../styles/home.style'

import Sidebar from 'react-sidebar';
import SidebarGistsList from '../containers/SidebarGistsList';
import CreateGist from './CreateGist';

import _ from 'lodash';
import $ from "jquery";
// import GithubApi from 'github';

require("../styles/home.scss");


/*
*/
class Home extends React.Component {
  static propTypes = {
    // children: PropTypes.element.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false,
      sidebarDocked: false
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.onClickSidebarToggleBtn = this.onClickSidebarToggleBtn.bind(this);
    this.onClickGithubAuthBtn = this.onClickGithubAuthBtn.bind(this);
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  mediaQueryChanged() {
    this.setState({sidebarDocked: this.state.mql.matches});
  }

  componentWillMount() {
    var mql = window.matchMedia(`(min-width: 800px)`);
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, sidebarDocked: mql.matches});
  }

  render() {
    var sidebarContent = (
      <div>
        <b>Sidebar content etrhueirhtiuweriugh eiuorfjeroij</b>
        <SidebarGistsList />
      </div>
    );

    return (
      <Sidebar sidebar={sidebarContent}
              open={this.state.sidebarOpen}
              docked={this.state.sidebarDocked}
              onSetOpen={this.onSetSidebarOpen}>
      <div style={s.topHeader}>
        {this.getSidebarToggleBtn()}
        <div style={s.githubAuthBtn} onClick={this.onClickGithubAuthBtn}>
          Login
        </div>
      </div>

        {/* <div className='container'>
          <div className='page-top-header'>
            <h1 className='page-top-title'>Mark Berry</h1>
          </div>
          <div className='page-content'>
            {this.props.children}
          </div>
        </div> */}
        {/* {this.props.children} */}
        <CreateGist />
      </Sidebar>
    );
  }

  getSidebarToggleBtn() {
    let iconName = '';
    if(this.state.sidebarDocked){
      iconName = 'fa-angle-double-left';
    }else{
      iconName = 'fa-angle-double-right';
    }

    return (
      <i style={s.sidebarToggleBtn}
          className={`fa ${iconName} fa-lg`}
          onClick={this.onClickSidebarToggleBtn}/>
    );
  }

  /*
  Event Callbacks
  */
  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  onClickSidebarToggleBtn() {
    this.setState({sidebarDocked: !this.state.sidebarDocked});
  }

  onClickGithubAuthBtn(){
    // $.ajax({
    //     url:"https://api.github.com/user",
    //     dataType: "jsonp",
    //     success : function( returndata )
    //     {
    //       console.log(returndata);
    //     }
    //   });
    // let client_id = 'b98b74eef1ea5236ecc3';
    // let url = `https://github.com/login/oauth/authorize`;
    // url += `?client_id=${client_id}&scope="gist"`;
    // console.log(url);
    // window.location = url;

    //Get Github Authorization Token with proper scope, print to console
    // $.ajax({
    //   url: 'https://api.github.com/authorizations',
    //   type: 'POST',
    //   beforeSend: function(xhr) {
    //     xhr.setRequestHeader("Authorization", "Basic " + btoa("marklb:gamefaqs3"));
    //   },
    //   data: '{"scopes":["gist"],"note":"ajax gist test for a user"}'
    // }).done(function(response) {
    //   console.log(response);
    // });
    const githubToken = window.localStorage.getItem('github_token');
    //List a gists
    $.ajax({
      url: 'https://api.github.com/gists',
      type: 'GET',
      beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", `token ${githubToken}`);
      },
      // data: '{"description": "a gist for a user with token api call via ajax","public": false,"files": {"file1.txt": {"content": "String file contents via ajax"}}}'
    }).done(function(response) {
      console.log(response);
    });

    //Create a Gist with token from above
    // $.ajax({
    //   url: 'https://api.github.com/gists',
    //   type: 'POST',
    //   beforeSend: function(xhr) {
    //     xhr.setRequestHeader("Authorization", "token 3bf6133e0a75ef9de4c77ea0c358949014cf27ba");
    //   },
    //   data: '{"description": "a gist for a user with token api call via ajax","public": false,"files": {"file1.txt": {"content": "String file contents via ajax"}}}'
    // }).done(function(response) {
    //   console.log(response);
    // });

    //Using Gist ID from the response above, we edit the Gist with Ajax PATCH request
    // $.ajax({
    //   url: 'https://api.github.com/gists/GIST-ID-FROM-PREVIOUS-CALL',
    //   type: 'PATCH',
    //   beforeSend: function(xhr) {
    //     xhr.setRequestHeader("Authorization", "token TOKEN-FROM-AUTHORIZATION-CALL");
    //   },
    //   data: '{"description": "updated gist via ajax","public": true,"files": {"file1.txt": {"content": "updated String file contents via ajax"}}}'
    // }).done(function(response) {
    //   console.log(response);
    // });

  }



};

// export default Home;
export default Radium(Home);
