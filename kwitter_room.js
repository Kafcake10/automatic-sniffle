
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function addUser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({purpose:"addinguser"});
      
}

function logout(){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logoutredirect(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}

function send(){
      user_name=localStorage.getItem("user_name");
      room_name=localStorage.getItem("room_name");
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({name:user_name,msg:msg,like:0});
      document.getElementById("msg").value="";
}