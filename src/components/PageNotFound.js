import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import _ from 'lodash';

// require("../styles/page-not-found.scss");


/*
*/
export default class PageNotFound extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }


  render() {
    return (
      <p>
        Page not found - the path, {location.pathname},
        did not match any React Router routes.
      </p>
    );
  }

  /*
  Event Callbacks
  */



};
