import { githubSignIn, githubSignOut, githubGetInfo} from '../common/mb-github'

export const GITHUB_AUTH_IS_INITIALIZING = 'GITHUB_AUTH_IS_INITIALIZING'
export const GITHUB_IS_LOGGING_IN = 'GITHUB_IS_LOGGING_IN'
export const GITHUB_IS_LOGGED_IN = 'GITHUB_IS_LOGGED_IN'
export const GITHUB_SET_INFO = 'GITHUB_SET_INFO'


const githubAuthIsInitializing = (isInitializing) => {
  return {
    type: GITHUB_AUTH_IS_INITIALIZING,
    isInitializing: isInitializing
  };
}

const githubIsLoggingIn = (isLoggingIn) => {
  return {
    type: GITHUB_IS_LOGGING_IN,
    isLoggingIn: isLoggingIn
  };
}

const githubIsLoggedIn = (isLoggedIn) => {
  return {
    type: GITHUB_IS_LOGGED_IN,
    isLoggedIn: isLoggedIn
  };
}

const githubSetInfo = (info) => {
  // console.log('info');
  // console.log(info);
  return {
    type: GITHUB_SET_INFO,
    ...info
  };
}

export const githubAuthInit = () => dispatch => {
  // console.log('githubAuthInit');
  dispatch(githubIsLoggedIn(false));
  dispatch(githubAuthIsInitializing(true));
  return new Promise((resolve, reject) => {
    const info = githubGetInfo();
    if(info){
      resolve(info);
    }else{
      reject(Error('Problem initializing github auth'));
    }
  }).then((result) => {
    // console.log('result');
    // console.log(result);
    dispatch(githubAuthIsInitializing(false));
    dispatch(githubSetInfo(result));
    dispatch(githubIsLoggedIn(true));
  }, (err) => {
    // console.log('err');
    // console.log(err);
    dispatch(githubAuthIsInitializing(false));
  });
}

export const githubLogin = () => dispatch => {
  dispatch(githubIsLoggedIn(false));
  dispatch(githubIsLoggingIn(true));
  return new Promise((resolve, reject) => {
    githubSignIn()
    .then((result) => {
      // console.log(result);
      dispatch(githubSetInfo(result));
      resolve("Logged in");
    },(err) => {
      reject(Error('Problem Logging In'));
    });
  }).then((result) => {
    // console.log('result');
    // console.log(result);
    dispatch(githubIsLoggingIn(false));
    dispatch(githubIsLoggedIn(true));
  }, (err) => {
    // console.log('err');
    // console.log(err);
    dispatch(githubIsLoggingIn(false));
    dispatch(githubIsLoggedIn(false));
  });
}

export const githubLogOut = () => dispatch => {
  return new Promise((resolve, reject) => {
    githubSignOut()
      .then((result) => {
        // console.log(result);
        resolve('Signed out');
      }, (err) => {
        reject(Error('Problem Signing out'));
      });
  }).then((result) => {
    // console.log('result');
    // console.log(result);
    dispatch(githubIsLoggedIn(false));
  }, (err) => {
    // console.log('err');
    // console.log(err);
  });
}
