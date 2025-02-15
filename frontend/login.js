import{auth, db, firebaseApp} from "./firebase.js"
import { createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import {signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const provider = new GoogleAuthProvider();
const usernamebox = document.querySelector('#usernamelogin');
const passwordbox = document.querySelector('#passwordlogin')

const loginmanual = async() => {
    const password = passwordbox.value;
    const email = usernamebox.value;
    try{
        const userCredential = await signInWithEmailAndPassword(auth,email,password);
        console.log('Logged in:', userCredential.user);
        localStorage.setItem('uid', userCredential.user.uid);
        window.location.href = 'index.html';

    } catch(error){
        console.error('Login error:', error.message);
        alert(error.message);
    }

}




const registermanual = async(username, email, password) => {
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(userCredential);
        console.log(user);
        await setDoc(doc(db,"users", user.uid), {
            email: user.email,
            createdAt: new Date(),
            username: username
        });

        console.log("User registered and document created:", user.uid);
    }
    catch(err){
        console.error("Error registering user:", err.message);
    }

}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#Login').addEventListener('click', () => {
        console.log('hi');
        let isvalid = true;
        const username = document.querySelector('#usernamelogin');
        const password = document.querySelector('#passwordlogin');
        if(!username.value.endsWith(".com")){
            username.setCustomValidity('Please enter a valid email address');
            username.reportValidity();
            isvalid = false
        }else{
            username.setCustomValidity('');
            
        }
        if (password.validity.valid) {
            password.setCustomValidity('wrong password');
            password.reportValidity();
            isvalid = false;
        }
        isvalid ? loginmanual():null;
        
    });
});

const logingoogle = () => {
    try {
        signInWithPopup(auth, provider).then((result) => {
            const user = result.user;
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            console.log("User Info:", user);
            localStorage.setItem('uid', user.uid);
            window.location.href = 'index.html';
        });
        

        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        
    }catch (error){
        console.error("error during Google Sign-In:", error.message);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email  = error.customData.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
    }
}

document.querySelector('#google').addEventListener('click', () => {
    logingoogle();
})

// document.querySelector('#registergooglebutton').addEventListener('click', () => {
//     console.log('hi');
//     logingoogle();
// })

function gotoregisterorlogin(){
    const registerbox = document.querySelector('.registerbox');
    registerbox.classList.toggle('hide');
    const loginbox = document.querySelector('.loginbox');
    loginbox.classList.toggle('hide');
}



const gotoregisterbutton = document.querySelector('#gotoregister');
const loginexistingaccbutton = document.querySelector('#loginexistingacc');

gotoregisterbutton.addEventListener('click', gotoregisterorlogin)
loginexistingaccbutton.addEventListener('click', (event) =>{
    gotoregisterorlogin();
    event.preventDefault();
    const allinputs = document.querySelectorAll('#registerForm input');
    allinputs.forEach((item) => {
        item.value = '';
    })
});
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
const registerbutton = document.querySelector('#registerbutton')
registerbutton.addEventListener('click', (e) => {
    // e.preventDefault();
    let isvalid = true;
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const confirmpassword = document.querySelector('#confirmPassword');
    if(email.validity.typeMismatch || !email.validity.valid){
        email.setCustomValidity("Please enter a valid email address");
        isvalid = false;
    }else {
        email.setCustomValidity('');
    }
    if (password.validity.tooShort) {
        password.setCustomValidity("Password must contain at least 6 characters");
        isvalid = false;
    } else if (password.validity.tooLong) {
        password.setCustomValidity("Password must be less than 20 characters");
        isvalid = false;
    } else {
        password.setCustomValidity('');
    }
    const passwordsMatch = password.value === confirmpassword.value;
    password.style.borderColor = confirmpassword.style.borderColor = passwordsMatch ? "" : "red";
    if (!passwordsMatch) {
        confirmpassword.setCustomValidity("Passwords do not match");
        isvalid = false;
    } else {
        confirmpassword.setCustomValidity('');
    }

    isvalid ? registermanual(name.value, email.value, password.value) : null;
    
    // registermanual(name.value,email.value,password.value);


})

document.querySelector('#password').addEventListener('click', function() {
    this.style.borderColor = "lightgray";
});
document.querySelector('#confirmPassword').addEventListener('click', function(){
    this.style.borderColor = "lightgray "
});
