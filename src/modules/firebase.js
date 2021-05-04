import firebase from 'firebase';

const app = firebase.initializeApp({
    apiKey: "",
    authDomain: "summer-body-novi.firebaseapp.com",
    projectId: "summer-body-novi",
    storageBucket: "summer-body-novi.appspot.com",
    messagingSenderId: "278360516439",
    appId: "1:278360516439:web:4cfc5e7dbef70957780012"
});

export default app;