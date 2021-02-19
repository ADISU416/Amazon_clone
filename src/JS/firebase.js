// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAZ-FA9uBS7F9rBYnKOfaTE6Ut1A32pZcM",
    authDomain: "clone-1b46d.firebaseapp.com",
    projectId: "clone-1b46d",
    storageBucket: "clone-1b46d.appspot.com",
    messagingSenderId: "588790481899",
    appId: "1:588790481899:web:4adceb748a6fb724e14fae",
    measurementId: "G-H1F9DM6HML"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };