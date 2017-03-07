// import * as firebase from 'firebase';
import firebase from 'firebase';

// Idea from: http://bodiddlie.github.io/firebase-auth-with-react-router/

var config = {
  apiKey: " AIzaSyA0DLFF2Mce0NgcNgHazW44MoPxKmckQY8",
  authDomain: "mb-snippet-manager.firebaseapp.com",
  databaseURL: "https://mb-snippet-manager.firebaseio.com",
  // storageBucket: "gs://mb-snippet-manager.appspot.com",
};

//the root app just in case we need it
export const firebaseApp = firebase.initializeApp(config);

export const db = firebase.database(); //the real-time database
export const auth = firebase.auth(); //the firebase auth namespace

export const storageKey = '_mbfbah'; // Localstorage key

export const isAuthenticated = () => {
  return !!auth.currentUser || !!localStorage.getItem(storageKey);
}

