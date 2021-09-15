// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//  
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAo2LX80RFIe0N7I3JAoNfC8gsohEWMS50",
//   authDomain: "todoapp-cae29.firebaseapp.com",
//   projectId: "todoapp-cae29",
//   storageBucket: "todoapp-cae29.appspot.com",
//   messagingSenderId: "326209561181",
//   appId: "1:326209561181:web:9aa3dfcd464440a48fe3b4"
// };

// Initialize Firebase
const Todoapp = firebase.initializeApp({
  apiKey: "AIzaSyAo2LX80RFIe0N7I3JAoNfC8gsohEWMS50",
  authDomain: "todoapp-cae29.firebaseapp.com",
  projectId: "todoapp-cae29",
  storageBucket: "todoapp-cae29.appspot.com",
  messagingSenderId: "326209561181",
  appId: "1:326209561181:web:9aa3dfcd464440a48fe3b4"
});

const db = Todoapp.firestore();

export default db;