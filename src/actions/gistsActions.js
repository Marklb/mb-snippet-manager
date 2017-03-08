import { githubGetGists } from '../common/mb-github'

export const CLEAR_GISTS = 'CLEAR_GISTS'
export const ADD_GIST = 'ADD_GIST'

export const clearGists = () => {
  return {
    type: CLEAR_GISTS
  };
};

export const addGist = (data) => {
  if (data.id === undefined || data.id === null) {
    return;
  };
  return {
    type: ADD_GIST,
    id: data.id,
    data: data
  };
}

export const initGists = () => dispatch => {
  dispatch(clearGists());
  return new Promise((resolve, reject) => {
    githubGetGists().then((result) => {
      console.log(result);
      const data = result.response.data;
      for(let i = 0; i < data.length; i++){
        dispatch(addGist(data[i]));
      }
      resolve({
        gistsAdded: data.length
      });
    },(err) => {
      reject(Error('Problem initializing gists'));
    });
  }).then((result) => {
    console.log('Done initializing gists');
    console.log(result);
  },(err) => {
    console.log(err);
  });
}

// let nextGistId = 0
// export const addGist = (text) => {
//   return {
//     type: 'ADD_GIST',
//     id: nextGistId++,
//     text
//   }
// }

// export const removeGist = (id) => {
//   return {
//     type: 'REMOVE_GIST',
//     id
//   }
// }

// export const setVisibilityFilter = (filter) => {
//   return {
//     type: 'SET_VISIBILITY_FILTER',
//     filter
//   }
// }

// export const toggleGist = (id) => {
//   return {
//     type: 'TOGGLE_GIST',
//     id
//   }
// }
