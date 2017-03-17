import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import s from '../styles/selectedGistPanel.style'
import selectedGistComponent from '../containers/SelectedGistComponent'

import Highlight from 'react-highlight'
import 'highlight.js/styles/ocean.css'

// TODO: Fix my mblib-dom module
// import { getWidth, getHeight } from 'mblib-dom/lib/utils'
const getWidth = (element = undefined) => {
  if (element !== undefined) {
    return element.innerWidth;
  }

  if (self.innerWidth) {
    return self.innerWidth;
  }

  if (document.documentElement && document.documentElement.clientWidth) {
    return document.documentElement.clientWidth;
  }

  if (document.body) {
    return document.body.clientWidth;
  }
};

const getHeight = (element = undefined) => {
  if (element !== undefined) {
    return element.innerHeight;
  }

  if (self.innerHeight) {
    return self.innerHeight;
  }

  if (document.documentElement && document.documentElement.clientHeight) {
    return document.documentElement.clientHeight;
  }

  if (document.body) {
    return document.body.clientHeight;
  }
};

import _ from 'lodash'

/*
*/
const SelectedGistPanel = selectedGistComponent(
  class extends React.Component {
  static propTypes = {
    // onClick: PropTypes.func.isRequired,
    // completed: PropTypes.bool.isRequired,
    // text: PropTypes.string.isRequired
    // gist: PropTypes.object.isRequired,
    // isSelected: PropTypes.bool.isRequired,
    // selectedGist: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }


  render() {
    // const onClick = this.props.onClick;
    // const text = this.props.gist.id;
    // const gist = this.props.gist;
    const gist = this.props.selectedGist.data;
    console.log(gist);
    // const files = Object.keys(gist.files);
    // console.log(files);
    // let text = gist.id;
    // if (files.length > 0) {
    //   text = files[0];
    // }

    const content = "Duh Gist";

    const style = {
      // display: 'block',
      // width: '100%',
      // height: '100%',
      // ...s.item,
      // ...((this.props.isSelected) ? s.itemSelected : {}),
      paddingLeft: '15px',
      paddingRight: '15px',
    }
    return (
      <div
        style={{
          ...style
        }}
      >
        {/*{content}*/}
        {/*<div style={{ width: '500px', height: '1000px', backgroundColor: 'rgba(20,20,20,1)'}}></div>*/}
        <Highlight className='javascript' style={{border: '1px solid white'}}>
          {/*{gist.files[files[0]].content}*/}
        </Highlight>
        <div style={{ height: (getHeight()/2)+'px'}}></div>
      </div>
    );
  }


});

// textDecoration: completed ? 'line-through' : 'none',

export default Radium(SelectedGistPanel)
