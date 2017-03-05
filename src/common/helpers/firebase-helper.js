import * as firebase from 'firebase';
// import firebase from 'firebase';

// Idea from: http://bodiddlie.github.io/firebase-auth-with-react-router/

var config = {
  apiKey: " AIzaSyA0DLFF2Mce0NgcNgHazW44MoPxKmckQY8",
  authDomain: "mb-snippet-manager.firebaseapp.com",
  databaseURL: "https://mb-snippet-manager.firebaseio.com",
  // storageBucket: "gs://mb-snippet-manager.appspot.com",
};

//the root app just in case we need it
// export const firebaseApp = firebase.initializeApp(config);
firebase.initializeApp(config);

export const db = firebase.database(); //the real-time database
export const auth = firebase.auth(); //the firebase auth namespace

export const storageKey = '_mbfbah'; // Localstorage key

export const isAuthenticated = () => {
  return !!auth.currentUser || !!localStorage.getItem(storageKey);
}


// const firebaseApp = firebase.initializeApp(config);

// const db = firebaseApp.database(); //the real-time database
// const auth = firebaseApp.auth(); //the firebase auth namespace

// const storageKey = '_mbfbah'; // Localstorage key

// const isAuthenticated = () => {
//   return !!auth.currentUser || !!localStorage.getItem(storageKey);
// }

// firebase.initializeApp(config);

// firebase.intializeApp(config);
// const fbh = {
//   firebaseApp: firebaseApp,
//   db: db,
//   auth: auth,
//   storageKey: storageKey,
//   isAuthenticated: isAuthenticated
// };

// export default fbh;
