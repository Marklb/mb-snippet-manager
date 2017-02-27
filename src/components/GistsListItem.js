import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import s from '../styles/gistsListItem.style'

import _ from 'lodash';



/*
*/
export default class GistsListItem extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }


  render() {
    console.log('opopopo');
    const onClick = this.props.onClick;
    const completed = this.props.completed;
    const text = this.props.text;
    return (
      <li
        onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
        {text}
      </li>
    );
  }

  /*
  Event Callbacks
  */



};
