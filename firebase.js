var app_firebase ={};

(function () {
    var firebaseConfig = {
    apiKey: "AIzaSyBjLGDmmbj2OkAPia04qBoD0TYgO1a4lLg",
    authDomain: "studenblog-85411.firebaseapp.com",
    databaseURL: "https://studenblog-85411.firebaseio.com",
    projectId: "studenblog-85411",
    storageBucket: "studenblog-85411.appspot.com",
    messagingSenderId: "680972776038",
    appId: "1:680972776038:web:ff4e98f7da2f46993673a7",
    measurementId: "G-Y38DG1N8MX"
  };
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    app_firebase = firebase;

    
})()
