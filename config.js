import firebase from 'firebase';

// add SDK Firebase

    const firebaseConfig = {
        apiKey: "AIzaSyBhTxkloBnrso2BfYpTbB8s6vCeZmTOQkw",
        authDomain: "open-source-project-12e76.firebaseapp.com",
        databaseURL: "https://open-source-project-12e76-default-rtdb.firebaseio.com",
        projectId: "open-source-project-12e76",
        storageBucket: "open-source-project-12e76.appspot.com",
        messagingSenderId: "783898344141",
        appId: "1:783898344141:web:c35144e493e1a8b1710784"
      };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();