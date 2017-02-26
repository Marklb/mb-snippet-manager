import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import _ from 'lodash';

require("../styles/app.scss");


/*
*/
export default class App extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }


  render() {
    return (
      <div className='container'>
        <div className='page-top-header'>
          <h1 className='page-top-title'>Mark Berry</h1>
        </div>
        <div className='page-content'>
          {children}
        </div>
      </div>
    );
  }

  /*
  Event Callbacks
  */



};
