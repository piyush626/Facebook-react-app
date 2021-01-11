import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDp8qYB4JfAX7UexstSGx2-6gjh7zEuyLI",
    authDomain: "fb-dome.firebaseapp.com",
    projectId: "fb-dome",
    storageBucket: "fb-dome.appspot.com",
    messagingSenderId: "93403464356",
    appId: "1:93403464356:web:761df55b825e11be1ddc31",
    measurementId: "G-7SL6WMFS6T"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;