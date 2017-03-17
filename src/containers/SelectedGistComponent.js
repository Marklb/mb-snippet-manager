import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { toggleGist } from '../actions';
// import { initGists } from '../actions/gistsActions';
// import { setSelectedGist } from '../actions/selectedGistActions';
// import GistsList from '../components/GistsList';

const selectedGistComponent = WrappedComponent => 
  SelectedGistConnector(class extends React.Component {
    constructor(props) {
      super(props);
      // this.handleChange = this.handleChange.bind(this);
      this.state = {
        // data: selectData(DataSource, props)
      };
    }

    componentDidMount() {
      // ... that takes care of the subscription...
      // DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      // DataSource.removeChangeListener(this.handleChange);
    }

    // handleChange() {
    //   // this.setState({
    //   //   data: selectData(DataSource, this.props)
    //   // });
    // }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      // return <WrappedComponent data={this.state.data} {...this.props} />;
      return <WrappedComponent {...this.props} />;
    }
  });

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

const getGist = (gists, selectedGist) => {
  if (selectedGist === null) return null;
  const arr = gists.filter(t => t.id == selectedGist.id)
  if(arr.length > 0){
    return arr[0];
  }
  return null;
}

const mapStateToProps = (state) => {
  return {
    // gists: getGists(state.gists, state.visibilityFilter),
    // gist: getGist(state.gists, state.selectedGist),
    // githubAuth: state.githubAuth,
    selectedGist: state.selectedGist,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // refreshGists: () => {
    //   dispatch(initGists())
    // },
    // setSelectedGist: (id) => {
    //   dispatch(setSelectedGist(id));
    // },
  }
}

// const SidebarGistsList = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(GistsList)

const SelectedGistConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default selectedGistComponent
