// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

const logIn = document.getElementById("login-btn");
const register = () =>  
{
    // console.log("diste un click");
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      }); 
};
logIn.addEventListener("click", register);