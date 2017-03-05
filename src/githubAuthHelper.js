import * as firebase from 'firebase';
import * as firebaseHelper from './common/helpers/firebase-helper'

let gah = {
  getUserInfo: () => {
    if (firebase.auth().currentUser) {

    }
  },

  signIn: (callback) => {

    // let res = {
    //   credential: {
    //     accessToken: '3489jgjik3498uhgf3409j34a6ev'
    //   }
    // };
    // console.log(res);
    // console.log('DoCallback');
    // callback(res, undefined);
    // console.log('currentUser');
    // console.log(firebase.auth().currentUser);
    // console.log(firebase.auth());
    // console.log(firebase.auth());
    // firebase.auth().currentUser.getToken(/* forceRefresh */ true).then(function (idToken) {
    //   // Send token to your backend via HTTPS
    //   // ...
    //   console.log(`idToken: ${idToken}`);
    // }).catch(function (error) {
    //   // Handle error
    // });
    // console.log('currentUser After');

    // let storedToken = window.localStorage.getItem('github_token');
    // if (storedToken) {
    //   callback({
    //     credential: {
    //       accessToken: storedToken
    //     }
    //   }, undefined);
    //   return;
    // }

    var provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('user');
    provider.addScope('gist');

    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      console.log(result);
      if (callback) {
        console.log('DoCallback');
        window.localStorage.setItem('github_token', token);
        callback(result, undefined);
      }
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      if (callback) {
        callback(undefined, error);
      }
    });
  }
};

export default gah;


// firebase.auth().signOut().then(function () {
//   // Sign-out successful.
// }, function (error) {
//   // An error happened.
// });
