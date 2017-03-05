import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import s from '../styles/gistsList.style'

import GistsListItem from './GistsListItem';

import _ from 'lodash';



/*
*/
export default class GistsList extends React.Component {
  static propTypes = {
    gists: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onGistClick: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    
  }

  componentWillMount() {
    
  }

  componentWillUnmount() {

  }

  render() {
    console.log('GistsList render');
    const gists = this.props.gists;
    const onGistClick = this.props.onGistClick;
    return (
      <ul>
        {gists.map(gist =>
          <GistsListItem
            key={gist.id}
            {...gist}
            onClick={() => onGistClick(gist.id)}
          />
        )}
      </ul>
    );
  }

  /*
  Event Callbacks
  */



};
