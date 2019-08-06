// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

const signUp = document.getElementById("confirm-signup");
const logInBtn = document.getElementById("login-btn");
const register = () =>  
{
    // console.log("diste un click");
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("create-password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      }); 
};
signUp.addEventListener("click", register);

const logIn = () =>{
    let logInEmail = document.getElementById("login-email").value;
    let logInPassword = document.getElementById("login-password").value;
firebase.auth().signInWithEmailAndPassword(logInEmail, logInPassword)
.catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log(errorCode);
        console.log(errorMessage);
  });
};
logInBtn.addEventListener("click", logIn);

const observe = () => {
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });
}