import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestone"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyARvIvusOIKQk4RCS56Xw-RlUB0-2mgfJM",
  authDomain: "nextfire-56267.firebaseapp.com",
  projectId: "nextfire-56267",
  storageBucket: "nextfire-56267.appspot.com",
  messagingSenderId: "388770356983",
  appId: "1:388770356983:web:529c100b6fc3dcdc5dfdf2",
  measurementId: "G-3WJ8P80V56",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()
