import * as firebase from 'firebase';
import * as firebaseHelper from './helpers/firebase-helper'
import * as axios from 'axios'

export const USER_DATA_KEY = '_gah'

export const githubGetInfo = () => {
  return JSON.parse(window.localStorage.getItem(USER_DATA_KEY));
}

export const githubSignIn = () => {
  return new Promise((resolve, reject) => {
    var provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('user');
    provider.addScope('gist');
    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      console.log('result');
      console.log(result);
      const data = {
        accessToken: token,
        displayName: user.displayName,
        // email: user.email,
        // photoURL: user.photoURL,
        firbase_uid: user.uid
      };
      window.localStorage.setItem(USER_DATA_KEY, JSON.stringify(data));
      // resolve(data);

      var config = {
        headers: { 'Authorization': `token ${token}` }
      };
      axios.get(`https://api.github.com/user`, config)
        .then(function (response) {
          console.log('response');
          console.log(response);
          // let userDataTmp = gah.getUserInfo();
          // userDataTmp.username = response.data.login;
          const dataTmp = Object.assign({}, data, {
            avatar_url: response.data.avatar_url,
            login: response.data.login,
            username: response.data.login,
            email: response.data.email,
            bio: response.data.bio,
            events_url: response.data.events_url,
            private_gists: response.data.private_gists,
            github_id: response.data.id,
            public_gists: response.data.public_gists,
            url: response.data.url,
          });
          window.localStorage.setItem(USER_DATA_KEY, JSON.stringify(dataTmp));
          resolve(dataTmp);
        })
        .catch(function (error) {
          console.log(error);
          reject(Error('Problem signing in'));
        });
      
    }).catch(function (error) {
      console.log('Firebase error');
      // console.log(error);
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      // if (callback) {
      //   callback(undefined, error);
      // }
      reject(Error('Problem signing in'));
    });
  });
}

export const githubSignOut = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
      window.localStorage.removeItem(USER_DATA_KEY)
      resolve('Signed out');
    }, function (error) {
      // An error happened.
      reject(Error('Problem Signing out'));
    });
  });
}

/**
 * 
 * @param {object} opts 
 */
export const githubGetGists = (opts = undefined) => {
  // TODO: Implement opts argument to get all gists or from specified time
  return new Promise((resolve, reject) => {
    const info = githubGetInfo();
    if (info === null) {
      reject(Error('Unable to retrieve github info. No stored info.'));
    }

    const page = null; // Not implemented yet

    const token = info.accessToken;
    const config = {
      headers: { 'Authorization': `token ${token}` }
    };
    axios.get('https://api.github.com/gists', config)
      .then(function (response) {
        console.log('response');
        console.log(response);
        resolve({
          page: page,
          response: response
        });
      })
      .catch(function (error) {
        if (info === null) {
          reject(Error('Unable to retrieve github info. Github api error.'));
        }
      });

  });
};

// resolve("Logged in")
// reject(Error('Problem Logging In'))


// .then((result) => {

// }, (err) => {

// });


// const token = window.localStorage.getItem('github_token');
// // console.log(token);
// var config = {
//   headers: { 'Authorization': `token ${token}` }
// };
