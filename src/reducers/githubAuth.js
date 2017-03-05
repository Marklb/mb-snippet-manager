import { GITHUB_LOGIN } from '../actions'

const initialState = {
  authToken: undefined
}

const githubAuth = (state = initialState, action) => {
  switch (action.type) {
    case GITHUB_LOGIN:
      console.log(action);
      console.log(action.authToken);
      let newState = Object.assign({}, state, {
        authToken: action.authToken
      })
      console.log(newState);
      return newState;

    default:
      return state
  }
}

export default githubAuth
