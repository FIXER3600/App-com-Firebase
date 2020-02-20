  
//https://firebase.google.com/docs/web/setup?hl=pt-br
// Initialize Firebase
var db;
document.addEventListener("deviceready", function() {
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();
}, false);

var firebaseConfig = {
    apiKey: "AIzaSyA3eljGvK51_VnDWysAuDH9NTakJC0PCFU",
    authDomain: "cordova-c951c.firebaseapp.com",
    databaseURL: "https://cordova-c951c.firebaseio.com",
    projectId: "cordova-c951c",
    storageBucket: "cordova-c951c.appspot.com",
    messagingSenderId: "557950440444",
    appId: "1:557950440444:web:e17d3da6011a5ce90ed879",
    measurementId: "G-B6YBV9L5KR"
  };

