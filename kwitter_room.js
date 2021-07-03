  var firebaseConfig = {
    apiKey: "AIzaSyDwyWtQkLjIQmugT9ZKk_-q_PmRCzBobis",
    authDomain: "web-chat-app-3735b.firebaseapp.com",
    databaseURL: "https://web-chat-app-3735b-default-rtdb.firebaseio.com",
    projectId: "web-chat-app-3735b",
    storageBucket: "web-chat-app-3735b.appspot.com",
    messagingSenderId: "181887373129",
    appId: "1:181887373129:web:47ae27861f35a3c7d09498",
    measurementId: "G-GVBF1Y7ELN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function logout() 
  {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
  }

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name;
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name)

    window.location = "kwitter_page.html";
  }

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html"
}


