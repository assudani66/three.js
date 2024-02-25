  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
 
  import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";  
  const firebaseConfig = {

    apiKey: "AIzaSyDw6HfUwmO7h7G18uaiBDQ2jOpiYQ-uQkg",
    
    authDomain: "spatialos-fa0e7.firebaseapp.com",
    
    databaseURL: "https://spatialos-fa0e7-default-rtdb.asia-southeast1.firebasedatabase.app",
    
    projectId: "spatialos-fa0e7",
    
    storageBucket: "spatialos-fa0e7.appspot.com",
    
    messagingSenderId: "304892230224",
    
    appId: "1:304892230224:web:cc68a85f8652278ebdaf55",
    
    measurementId: "G-SN67L7GHND"
    
    };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();


  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  
  const signInButton = document.getElementById("signInButton");

  const userSignIn = async() => {
    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user
        console.log(user);
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message
        console.error(errorCode,errorMessage)
    })
  }

  export const checkAuth = () =>{
    onAuthStateChanged(auth, (user) => {
      if(user) {
        console.log(user)
        window.location.href = "user_info.html";

      } else {
      }
    })
  } 

  checkAuth()

  signInButton.addEventListener('click', userSignIn);


