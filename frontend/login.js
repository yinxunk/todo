import{auth, db} from "./firebase.js"
import { createUserWithEmailAndPassword} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import {signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth"

const provider = new GoogleAuthProvider();
const usernamebox = document.querySelector('#usernamelogin');
const passwordbox = document.querySelector('#passwordlogin')

const loginmanual = async() => {
    const password = passwordbox.value;
    try{
        const userCredential = await firebase.auth().signInWithEmailAndPassword(auth,email,password);
        console.log('Logged in:', userCredential.user);
        localStorage.setItem('uid', userCredential.user.uid);
        window.location.href = 'index.html';

    } catch(error){
        console.error('Login error:', error.message);
        alert(error.message);
    }

}


const logingoogle = async() => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        console.log("User Info:", user);

        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
    }catch (error){
        console.error("error during Google Sign-In:", error.message);
    }
}



// const login = async() => {
//     const username = document.querySelector('#usernamelogin').value;
//     const password = document.querySelector('#passwordlogin').value;
//     const wrongpassorname = document.querySelector('.wrongpassorname');
//     try{
//         const request = new Request("http://localhost:3000/todos/login", {
//             method: "POST",
//             headers: {"Content-Type" : "application/json"},
//             body: JSON.stringify({username, password})
//         });
//         const response = await fetch (request);
        
//         if (!response.ok) {
//             const errorData = await response.json();
//             console.error('Login failed:', errorData.message);
//             wrongpassorname.textContent = 'Invalid credentials';
//             passwordbox.style.borderColor = 'red';
//             usernamebox.style.borderColor = "red";
//             return;
//         }

//         const data = await response.json();
//         localStorage.setItem('token', data.token);
//         console.log(localStorage.getItem('token'));
//         window.location.href = 'index.html';
//         wrongpassorname.textContent = '';
//         usernamebox.value = '';
//         passwordbox.value = '';
//     } catch (err) {
//         console.error('Error during login:', err);
//         alert('An error occurred during login. Please try again later.');
//     }
    
    

// }

usernamebox.addEventListener('click', () => {
    usernamebox.style.borderColor = "lightgray"
})

passwordbox.addEventListener('click', () => {
    passwordbox.style.borderColor = "lightgray"
})



// document.querySelector('#Register').addEventListener('click', () =>{
//     register();
//     console.log('hi');
// });
