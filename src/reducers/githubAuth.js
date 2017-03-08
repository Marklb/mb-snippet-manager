import {
  GITHUB_AUTH_IS_INITIALIZING, GITHUB_IS_LOGGING_IN, GITHUB_IS_LOGGED_IN,
  GITHUB_SET_INFO} from '../actions/githubActions'
import { REHYDRATE } from 'redux-persist/constants'

const initialState = {
  isInitializing: false,
  isLoggingIn: false,
  isLoggedIn: false,

  accessToken: null,
  displayName: null,
  firbase_uid: null,
  avatar_url: null,
  login: null,
  username: null,
  email: null,
  bio: null,
  events_url: null,
  private_gists: null,
  github_id: null,
  public_gists: null,
  url: null,
}

const githubAuth = (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      console.log('REHYDRATE: githubAuth');
      const incoming = action.payload.githubAuth
      // console.log(incoming.specialKey);
      // console.log(incoming);
      // console.log('------');
      // if (incoming) return { 
      //   ...state, 
      //   ...incoming, 
      //   specialKey: processSpecial(incoming.specialKey) 
      // }
      if (incoming) return {
        ...state,
        ...incoming
      }
      return state
    case GITHUB_AUTH_IS_INITIALIZING:
      return Object.assign({}, state, {
        isInitializing: action.isInitializing,
      });

    case GITHUB_IS_LOGGING_IN:
      return Object.assign({}, state, {
        isLoggingIn: action.isLoggingIn,
      });

    case GITHUB_IS_LOGGED_IN:
      return Object.assign({}, state, {
        isLoggedIn: action.isLoggedIn,
      });

    case GITHUB_SET_INFO:
      const obj = Object.assign({}, state, { ...action });
      delete obj.type
      return obj;

    default:
      return state
  }
}

export default githubAuth
