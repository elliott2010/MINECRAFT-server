
//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyDN1IT3prBNw0viOwzVDHamRA7jAC6j9H4",
      authDomain: "minecraft-servers-db964.firebaseapp.com",
      databaseURL: "https://minecraft-servers-db964-default-rtdb.firebaseio.com",
      projectId: "minecraft-servers-db964",
      storageBucket: "minecraft-servers-db964.appspot.com",
      messagingSenderId: "87974311183",
      appId: "1:87974311183:web:8427eecb06951b0c2f7a7a"
    };
    
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="WEEEEEEEEELLLLLLLLLCOCOCOCOOCOMEEE!"+user_name 
function server (){
      var room_name=document.getElementById("room_name");
      firebase.database().ref("/").child(room_name).update({
      purpose:"add room name"
      })
      localStorage.setItem("room_name",room_name);
      window.location="index3.html"
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row
      //Final del código
      });});}
getData();


function logout(){
      localStorage.removeItem("user_name");
    window.location="index.html"  
}
