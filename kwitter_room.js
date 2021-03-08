var firebaseConfig = {
      apiKey: "AIzaSyBIhJO1k_4xN0Gb_wHSKMJfm2W2fL8_pZM",
      authDomain: "kwitter-286fd.firebaseapp.com",
      databaseURL: "https://kwitter-286fd-default-rtdb.firebaseio.com",
      projectId: "kwitter-286fd",
      storageBucket: "kwitter-286fd.appspot.com",
      messagingSenderId: "843260747500",
      appId: "1:843260747500:web:bcdebef05ad5a6c8d1cfc9",
      measurementId: "G-2E9DT1YH1R"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function add_room(){
      roomname=document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"addingroomname"
      });
      localStorage.setItem("room_name",roomname);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+"onclick='reset(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function reset(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}