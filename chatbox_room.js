const firebaseConfig = {
  apiKey: "AIzaSyAhV7-HDCCc3MMA0NkTHx1cJBZspZ7T_D0",
  authDomain: "chatboxdatabase-c1040.firebaseapp.com",
  databaseURL: "https://chatboxdatabase-c1040-default-rtdb.firebaseio.com",
  projectId: "chatboxdatabase-c1040",
  storageBucket: "chatboxdatabase-c1040.appspot.com",
  messagingSenderId: "288365153754",
  appId: "1:288365153754:web:9fbd37c25845c337e304e3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {
  document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) {
  childKey  = childSnapshot.key;
  Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
