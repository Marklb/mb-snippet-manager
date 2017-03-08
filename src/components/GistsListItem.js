import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import s from '../styles/gistsListItem.style'



/*
*/
class GistsListItem extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    // completed: PropTypes.bool.isRequired,
    // text: PropTypes.string.isRequired
    gist: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }


  render() {
    const onClick = this.props.onClick;
    // const text = this.props.gist.id;
    const gist = this.props.gist.data;
    console.log(gist);
    const files = Object.keys(gist.files);
    console.log(files);
    let text = gist.id;
    if (files.length > 0) {
      text = files[0];
    }
    return (
      <li
        onClick={onClick}
        style={{
          ...s.item
        }}
      >
        {text}
      </li>
    );
  }


};

// textDecoration: completed ? 'line-through' : 'none',

export default Radium(GistsListItem)
