export const GITHUB_LOGIN = 'GITHUB_LOGIN';
export const SET_GITHUB_INFO = 'SET_GITHUB_INFO';

export const githubLogin = (authToken) => {
  console.log(`githubLogin: ${authToken}`);
  return {
    type: GITHUB_LOGIN,
    authToken: authToken
    // ...authToken
  }
}

export const setGithubInfo = (info) => {
  console.log(`setGithubInfo:`);
  console.log(info);
  // return {
  //   type: GITHUB_LOGIN,
  //   authToken: authToken
  //   // ...authToken
  // }
  // return {
  //   type: SET_GITHUB_INFO,
  //   accessToken: info.accessToken,
  //   displayName: info.displayName,
  //   email: info.email,
  //   photoURL: info.photoURL,
  //   uid: info.uid,
  //   username: info.username,
  // }
  return {
    type: SET_GITHUB_INFO,
    ...info
  }
  // return ret;
}

let nextGistId = 0
export const addGist = (text) => {
  return {
    type: 'ADD_GIST',
    id: nextGistId++,
    text
  }
}

export const removeGist = (id) => {
  return {
    type: 'REMOVE_GIST',
    id
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleGist = (id) => {
  return {
    type: 'TOGGLE_GIST',
    id
  }
}
