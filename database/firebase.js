const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyB11H6FhhoIyAcH5J4GMxbWqBky0cnUX5I",
    authDomain: "reactnativeuno-1164a.firebaseapp.com",
    projectId: "reactnativeuno-1164a",
    storageBucket: "reactnativeuno-1164a.appspot.com",
    messagingSenderId: "16488546980",
    appId: "1:16488546980:web:dbb995f72b31e1effc5c31"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  export default{ 
      firebase,
      db,
  };