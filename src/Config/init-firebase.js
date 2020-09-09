import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBADQ_HhZtqpN3CnDi3v0mS8_yiMGcIbXE",
    authDomain: "hubapp-7c145.firebaseapp.com",
    databaseURL: "https://hubapp-7c145.firebaseio.com",
    projectId: "hubapp-7c145",
    storageBucket: "hubapp-7c145.appspot.com",
    messagingSenderId: "750456920061",
    appId: "1:750456920061:web:c936d26ef6debbe5592b94"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export {
    firebase,
    db,
    auth
}