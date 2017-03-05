import { GITHUB_LOGIN, SET_GITHUB_INFO } from '../actions'

const initialState = {
  authToken: null,
  accessToken: null,
  displayName: null,
  email: null,
  photoURL: null,
  uid: null,
  username: null
}

const githubAuth = (state = initialState, action) => {
  console.log('githubAuth');
  switch (action.type) {
    case GITHUB_LOGIN:
      console.log(action);
      console.log(action.authToken);
      let newState = Object.assign({}, state, {
        authToken: action.authToken
      })
      console.log(newState);
      return newState;

    case SET_GITHUB_INFO:
      console.log(action);
      // console.log(action.authToken);
      let newState2 = Object.assign({}, state, {
        accessToken: action.accessToken,
        displayName: action.displayName,
        email: action.email,
        photoURL: action.photoURL,
        uid: action.uid,
        username: action.username,
      });
      console.log(newState2);
      return newState2;

    default:
      return state
  }
}

export default githubAuth
