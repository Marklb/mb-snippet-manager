import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'
import s from '../styles/home.style'

import Sidebar from 'react-sidebar'
// import ScrollArea from 'react-scrollbar'
import { Scrollbars } from 'react-custom-scrollbars';

import SidebarGistsList from '../containers/SidebarGistsList'
import CreateGist from './CreateGist'
import MenuAccountDropdown from '../containers/MenuAccountDropdown'
import SelectedGistPanel from './SelectedGistPanel'

import { getWidth, getHeight } from 'mblib-dom/lib/utils'

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
      sidebarDocked: false,
      sidebarWidth: 300,
      isSidebarResizable: false,
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.onClickSidebarToggleBtn = this.onClickSidebarToggleBtn.bind(this);
    this.onClickGithubAuthBtn = this.onClickGithubAuthBtn.bind(this);
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  mediaQueryChanged() {
    let isSidebarResizable = false;
    if (this.state.mql.matches) {
      isSidebarResizable = true;
    }
    this.setState({
      sidebarDocked: this.state.mql.matches,
      isSidebarResizable: isSidebarResizable
    });
  }

  componentWillMount() {
    var mql = window.matchMedia(`(min-width: 800px)`);
    mql.addListener(this.mediaQueryChanged);
    let isSidebarResizable = false;
    if (mql.matches) {
      isSidebarResizable = true;
    }
    this.setState({
      mql: mql,
      sidebarDocked: mql.matches,
      isSidebarResizable: isSidebarResizable
    });
  }

  getSidebarToggleBtn() {
    let iconName = '';
    if (this.state.sidebarDocked) {
      iconName = 'fa-angle-double-left';
    } else {
      iconName = 'fa-angle-double-right';
    }

    return (
      <i style={s.sidebarToggleBtn}
        className={`fa ${iconName} fa-lg`}
        onClick={this.onClickSidebarToggleBtn} />
    );
  }

  render() {
    let sidebarStyle = s.sideBarContent;
    if (this.state.isSidebarResizable) {
      sidebarStyle.width = this.state.sidebarWidth + 'px';
    } else {
      sidebarStyle.width = (getWidth() - 10) + 'px';
    }
    let sidebarContent = (
      <div style={sidebarStyle}>
        {/*<b>Sidebar content etrhueirhtiuweriugh eiuorfjeroij uygiytufytifty</b>*/}
        <SidebarGistsList />
      </div>
    );
    // {display: 'flex', flexFlow: 'column', height: '100%'}
    // {/*<Scrollbars>
    // </Scrollbars>*/}
    console.log(getHeight());
    return (
      <Sidebar sidebar={sidebarContent}
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}>
        <div style={{ ...s.pageContainer}}>
          <div style={{ ...s.topHeader}}>
            {this.getSidebarToggleBtn()}
            {/*<div style={s.githubAuthBtn} onClick={this.onClickGithubAuthBtn}>
              Logout
            </div>*/}
            <div style={s.menuBtnsContainer}>
              <MenuAccountDropdown />
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
          {/*{this.props.children} */}
          {/*<CreateGist />*/}
          
          
          <Scrollbars style={s.contentContainer}>
            <SelectedGistPanel />
          </Scrollbars>
          
          

        </div>
      </Sidebar>
    );
  }


  /*
  Event Callbacks
  */
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  onClickSidebarToggleBtn() {
    this.setState({ sidebarDocked: !this.state.sidebarDocked });
  }

  onClickGithubAuthBtn() {
    // githubAuthHelper.signIn();
    this.props.githubSignOut();
    // $.ajax({
    //     url:"https://api.github.com/user",
    //     dataType: "jsonp",
    //     success : function( returndata )
    //     {
    //       console.log(returndata);
    //     }
    //   });
    // let client_id = 'b98b74eef1ea5236ecc3f4h3';
    // let url = `https://github.com/login/oauth/authorize`;
    // url += `?client_id=${client_id}&scope="gist"`;
    // console.log(url);
    // window.location = url;

    //Get Github Authorization Token with proper scope, print to console
    // $.ajax({
    //   url: 'https://api.github.com/authorizations',
    //   type: 'POST',
    //   beforeSend: function(xhr) {
    //     xhr.setRequestHeader("Authorization", "Basic " + btoa("username:password"));
    //   },
    //   data: '{"scopes":["gist"],"note":"ajax gist test for a user"}'
    // }).done(function(response) {
    //   console.log(response);
    // });
    // const githubToken = window.localStorage.getItem('github_token');
    // //List a gists
    // $.ajax({
    //   url: 'https://api.github.com/gists',
    //   type: 'GET',
    //   beforeSend: function(xhr) {
    //     xhr.setRequestHeader("Authorization", `token ${githubToken}`);
    //   },
    //   // data: '{"description": "a gist for a user with token api call via ajax","public": false,"files": {"file1.txt": {"content": "String file contents via ajax"}}}'
    // }).done(function(response) {
    //   console.log(response);
    // });

    //Create a Gist with token from above
    // $.ajax({
    //   url: 'https://api.github.com/gists',
    //   type: 'POST',
    //   beforeSend: function(xhr) {
    //     xhr.setRequestHeader("Authorization", `token ${authToken}`);
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
