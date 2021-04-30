import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyA1veiUKUzfnhRQyxOzv2ratPjwxXnVIOo",
    authDomain: "noteware-b9b32.firebaseapp.com",
    projectId: "noteware-b9b32",
    storageBucket: "noteware-b9b32.appspot.com",
    messagingSenderId: "8011511717",
    appId: "1:8011511717:web:72f4129ef2c799ca1d1a4c"
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const imageStorage = firebase.storage()
const firestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {auth, imageStorage, firestore, timestamp}