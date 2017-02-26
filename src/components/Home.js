import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import s from '../styles/home.style'

import Sidebar from 'react-sidebar';

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
    var sidebarContent = <b>Sidebar content etrhueirhtiuweriugh eiuorfjeroij</b>;
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
    let client_id = 'b98b74eef1ea5236ecc3';
    let url = `https://github.com/login/oauth/authorize`;
    url += `?client_id=${client_id}&scope="gist"`;
    console.log(url);
    window.location = url;
  }



};

// export default Home;
export default Radium(Home);
