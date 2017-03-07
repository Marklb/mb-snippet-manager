import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'
import s from '../styles/gistsList.style'

import GistsListItem from './GistsListItem'
import FontAwesomeIcon from './FontAwesomeIcon'

import _ from 'lodash'
import * as axios from 'axios'



/*
*/
class GistsList extends React.Component {
  static propTypes = {
    gists: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    githubAuth: PropTypes.shape({
      authToken: PropTypes.string,
      displayName: PropTypes.string,
      email: PropTypes.string,
      photoURL: PropTypes.string
    }).isRequired,
    onGistClick: PropTypes.func.isRequired
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
    // const token = window.localStorage.getItem('github_token');
    // console.log(token);
    const token = this.props.githubAuth.accessToken;
    console.log(this.props);
    console.log(token);
    var config = {
      headers: { 'Authorization': `token ${token}` }
    };
    // // axios.get('"https://api.github.com/users', {
    // //   params: {
    // //     ID: 8348647
    // //   }
    // // })
    // // axios.get('https://api.github.com/users/marklb')
    // axios.get('https://api.github.com/user/8348647')
    // // axios.get('https://api.github.com/users')
    axios.get('https://api.github.com/gists', config)
      .then(function (response) {
        console.log('response');
        console.log(response);
      })
      .catch(function (error) {
        // console.log(error);
      });
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
    return (
      <div>
        {header}
        <ul>
          {gists.map(gist =>
            <GistsListItem
              key={gist.id}
              {...gist}
              onClick={() => onGistClick(gist.id)}
            />
          )}
        </ul>
      </div>
    );
  }


};


export default Radium(GistsList)
