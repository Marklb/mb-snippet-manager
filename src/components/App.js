import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import s from '../styles/app.style'

import _ from 'lodash';
import $ from "jquery";

require("../styles/app.scss");


/*
*/
class App extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {

    };

  }

  componentWillUnmount() {

  }

  componentWillMount() {

  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }

  /*
  Event Callbacks
  */


};

// export default App;
export default Radium(App);
