import { connect } from 'react-redux';
// import { toggleGist } from '../actions';
import { initGists } from '../actions/gistsActions';
import GistsList from '../components/GistsList';

// const getGists = (gists, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       return gists
//     case 'SHOW_PUBLIC':
//       return gists.filter(t => t.completed)
//     case 'SHOW_PRIVATE':
//       return gists.filter(t => !t.completed)
//   }
// }

const mapStateToProps = (state) => {
  return {
    // gists: getGists(state.gists, state.visibilityFilter),
    gists: state.gists,
    githubAuth: state.githubAuth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    refreshGists: () => {
      dispatch(initGists())
    }
  }
}

const SidebarGistsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(GistsList)

export default SidebarGistsList
