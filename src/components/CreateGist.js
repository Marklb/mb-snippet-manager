import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { addGist } from '../actions';
import Radium from 'radium';

import s from '../styles/createGist.style'

import _ from 'lodash';



/*
*/
export default connect()(class CreateGist extends React.Component {
  static propTypes = {

  };

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.onClickAddGist = this.onClickAddGist.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  render() {

    return (
      <div>
        <textarea value={this.state.value} onChange={this.handleChange}></textarea>
        <button onClick={this.onClickAddGist}>Create Gist</button>
      </div>
    );
  }

  /*
  Event Callbacks
  */
  onClickAddGist() {
    console.log('Add gist');
    console.log(this.state.value);
    this.props.dispatch(addGist(this.state.value))
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }



});
