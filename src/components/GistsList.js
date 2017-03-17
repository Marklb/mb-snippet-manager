import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'
import s from '../styles/gistsList.style'

import GistsListItem from './GistsListItem'
import FontAwesomeIcon from './FontAwesomeIcon'

import * as axios from 'axios'



/*
*/
class GistsList extends React.Component {
  static propTypes = {
    gists: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      data: PropTypes.object.isRequired
    }).isRequired).isRequired,
    selectedGist: PropTypes.object.isRequired,
    githubAuth: PropTypes.object,
    refreshGists: PropTypes.func.isRequired,
    setSelectedGist: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
    };

    this.onClickRefreshListBtn = this.onClickRefreshListBtn.bind(this);
  }

  componentDidMount() {
    
  }

  componentWillMount() {
    
  }

  componentWillUnmount() {

  }

  onClickRefreshListBtn(e) {
    console.log('Clicked');
    this.props.refreshGists();
  }

  render() {
    const header = (
      <div style={s.header}>
        <p style={s.headerText}>Gists</p>
        <FontAwesomeIcon 
          iconStyle={s.refreshBtn} 
          iconName='refresh' 
          iconSize='sm' 
          extraClassNames=''
          onClickBtn={this.onClickRefreshListBtn}/>
      </div>
    );
    // console.log('GistsList render');
    const gists = this.props.gists;
    const onGistClick = this.props.onGistClick;
    // console.log(this.props);
    return (
      <div>
        {header}
        <ul>
          {gists.map(gist =>
            <GistsListItem
              key={gist.id}
              gist={gist}
              isSelected={this.props.selectedGist.id == gist.id}
              onClick={() => this.props.setSelectedGist(gist.id)}
            />
          )}
        </ul>
      </div>
    );
  }


};


export default Radium(GistsList)
