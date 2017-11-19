import firebase from "firebase"

var config = {
  apiKey: "AIzaSyCGlhpe6JrLxLn_bjc7LSgiD-21CAfwmY4",
  authDomain: "beezer-test-f0ac5.firebaseapp.com",
  databaseURL: "https://beezer-test-f0ac5.firebaseio.com",
  projectId: "beezer-test-f0ac5",
  storageBucket: "beezer-test-f0ac5.appspot.com",
  messagingSenderId: "804072347009"
};
firebase.initializeApp(config);

export default firebase;