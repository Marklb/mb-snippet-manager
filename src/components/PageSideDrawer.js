import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import _ from 'lodash';

require("../styles/page-side-drawer.scss");


/*
*/
class PageSideDrawer extends React.Component {
  static propTypes = {

  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }


  render() {
    let cssPrefix = 'page-side-drawer';
    return (
      <div className={`${cssPrefix}`}>

      </div>
    );
  }

  /*
  Event Callbacks
  */



};

export default Radium(PageSideDrawer)
