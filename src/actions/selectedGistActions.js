import { store } from '../appStore'
import * as axios from 'axios'

export const SET_SELECTED_GIST = 'SET_SELECTED_GIST'

export const setSelectedGistData = (data) => {
  return {
    type: SET_SELECTED_GIST,
    id: data.id,
    data: data.data,
  };
}

export const setSelectedGist = (id) => dispatch => {
  // console.log('setSelectedGist');
  return new Promise((resolve, reject) => {
    // console.log('setSelectedGist promise');
    
    const state = store.getState();
    // console.log(state);
    const gists = state.gists;
    const gist = gists.filter(t => t.id == id)[0];
    // console.log(gist);
    const gistUrl = gist.data.url;
    const token = state.githubAuth.accessToken;

    var config = {
      headers: { 'Authorization': `token ${token}` }
    };
    axios.get(gistUrl, config)
      .then(function (response) {
        // console.log('response');
        // console.log(response);

        resolve({
          id: id,
          data: response.data
        });
      })
      .catch(function (error) {
        // console.log(error);
        reject(Error('Problem getting gist info'));
      });


    // resolve("info");
  }).then((result) => {
    // console.log('result');
    // console.log(result);
    dispatch(setSelectedGistData(result));
  }, (err) => {
    console.log('err');
    console.log(err);
  });
}
