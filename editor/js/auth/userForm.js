import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore,doc, setDoc ,getDoc  } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
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
    
    const avatar = document.querySelector(".avatar")
    const userName = document.querySelector("#userName")
    const userEmail = document.querySelector("#userEmail")
	const submit = document.querySelector("#submit")
	const company = document.querySelector("#company-name")
	const occupation = document.querySelector("#occupation")
	const profession = document.querySelector("#software-used")
	const provider = new GoogleAuthProvider();

	provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  
	const db = getFirestore(app);

	export const checkAuth = () =>{
		onAuthStateChanged(auth, async(user) => {
			if(user) {
				avatar.src = user.photoURL
				userName.innerHTML = user.displayName
				userEmail.innerHTML = user.email
				const docRef = doc(db,"userInfo",user.displayName.replaceAll(' ',''))
				const docSnap = await getDoc(docRef)
				if(docSnap.exists){
					window.location.href = "/editor"
				}
				
			} else {
				window.location.href = "auth.html";
			}
		})
	} 
	

	checkAuth()

	const signInButton = document.querySelector("#signOutBtn")
	signInButton.addEventListener("click",async()=>{
		signOut(auth).then(() => {
		  
		}).catch((error) => {
			console.error(error)
		})
	})

	
	
	const submitInfo = async() =>{
		const user = userName.innerHTML.replaceAll(' ','')
		await setDoc(doc(db, "usersInfo",user), {
			company:company.value,
			occupation:occupation.value,
			profession:profession.value,
			software:profession.value,
		  });
		window.location.href = "/editor"
	}

	submit.addEventListener("click",async()=>{
		await submitInfo()
	})