// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

const signUp = document.getElementById("confirm-signup");
const logInBtn = document.getElementById("login-btn");
const logOffBtn = document.getElementById("log-off");

const register = () =>  
{
    // console.log("diste un click");
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("create-password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
        verify();
    })
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
        write(user);
        console.log("existe usuario activo");
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      console.log(user.emailVerified)
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      console.log("no existe usuario activo");
      // ...
    }
  });
}
observe();

const write = (user) => {
    // let user1 = user; 
    let content = document.getElementById ("content");
    if(user.emailVerified){
        content.innerHTML = "Login exitoso";
    }
    
}

const logOff = () => {
    firebase.auth().signOut()
    .then(()=> {
console.log("saliendo...")
    })
    .catch((error) => {
console.log(error)
    })
}
logOffBtn.addEventListener("click",logOff);

const verify = () => {
    let user = firebase.auth().currentUser;
user.sendEmailVerification()
.then(function() {
    console.log("enviando correo...")
  // Email sent.
}).catch(function(error) {
    console.log(error);
  // An error happened.
});
}

//Se inicializa Firestore

// firebase.initializeApp({
//     apiKey: "AIzaSyDZaNmRtlEnDMsa_tuR9iapQoZ8vTUxhNA",
//     authDomain: "foodlova-be05e.firebaseapp.com",
//     projectId: "foodlova-be05e"
//   });
  
  var db = firebase.firestore();

  db.collection("users").add({
    first: "Vero",
    last: "Dulces",
    born: 1900
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
