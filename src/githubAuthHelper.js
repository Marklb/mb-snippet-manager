import * as firebase from 'firebase';
import * as firebaseHelper from './common/helpers/firebase-helper'
import * as axios from 'axios'
import { store } from './appStore'
// import * as reduxActions from './actions'
// console.log(reduxActions);

let gah = {
  USER_DATA_KEY: '_gah',

  getUserInfo: () => {
    let data = JSON.parse(window.localStorage.getItem(gah.USER_DATA_KEY));
    return data;
    // if (firebase.auth().currentUser) {
    // }
  },

  updateUserInfo: (data, reduxUpdate) => {
    console.log('updateUserInfo');
    console.log(data);
    const token = window.localStorage.getItem('github_token');
    console.log(token);
    var config = {
      headers: { 'Authorization': `token ${token}` }
    };

    let userData = {};
    if (data.accessToken) {
      userData.accessToken = data.accessToken;
    }
    if (data.displayName) {
      userData.displayName = data.displayName;
    }
    if (data.email) {
      userData.email = data.email;
    }
    if (data.photoURL) {
      userData.photoURL = data.photoURL;
    }
    if (data.uid) {
      userData.uid = data.uid;
    }
    console.log(gah.USER_DATA_KEY);
    window.localStorage.setItem(gah.USER_DATA_KEY, JSON.stringify(userData));
    // store.dispatch(reduxActions.setGithubInfo(userData));
    console.log('Attempt reduxUpdate 1');
    console.log(reduxUpdate);
    if (reduxUpdate) {
      console.log('Attempt reduxUpdate 1.1');
      reduxUpdate(userData);
    }
    
    if (data.accessToken) {
      axios.get('https://api.github.com/user/8348647', config)
        .then(function (response) {
          console.log('response');
          console.log(response);
          let userDataTmp = gah.getUserInfo();
          userDataTmp.username = response.data.login;
          window.localStorage.setItem(gah.USER_DATA_KEY, 
            JSON.stringify(userDataTmp));
          // store.dispatch(reduxActions.setGithubInfo(userDataTmp));
          console.log('Attempt reduxUpdate 2');
          if (reduxUpdate) {
            console.log('Attempt reduxUpdate 2.1');
            reduxUpdate(userDataTmp);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },

  signIn: (callback, setGithubInfoFn) => {

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
      console.log('result');
      console.log(result);
      window.localStorage.setItem('github_token', token);
      // gah.updateUserInfo({
      //   accessToken: token,
      //   displayName: user.displayName,
      //   email: user.email,
      //   photoURL: user.photoURL,
      //   uid: user.uid
      // });
      if (callback) {
        console.log('DoCallback');
        callback(result, undefined);
        gah.updateUserInfo({
          accessToken: token,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid
        }, setGithubInfoFn);
      }else{
        gah.updateUserInfo({
          accessToken: token,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid
        });
      }
    }).catch(function (error) {
      console.log(error);
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
  },

  signOut: () => {
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
    }, function (error) {
      // An error happened.
    });
  },
};

export default gah;


// firebase.auth().signOut().then(function () {
//   // Sign-out successful.
// }, function (error) {
//   // An error happened.
// });
