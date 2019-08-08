window.firebaseFunction = {
    register: () => {
        // console.log("diste un click");
        let userName = document.getElementById("username").value
        let email = document.getElementById("signup-email").value;
        let password = document.getElementById("create-password").value;
        let confirmPassword = document.getElementById("confirm-password").value
        if(userName === ''){
            alert('Te falta escribir tu nombre');
            return;
        }
        if(email.length < 4){
            alert('Tu correo no es valido');
            return;
        }
        if(password.length < 6){
            alert('Tu contraseña debe tener 6 caracteres por lo menos');
            return;
        }
        if(password !== confirmPassword){
            alert('la contraseña no es la misma');
            return;
        }
        //PENDIENTE TERMINOS Y CONDICIONES
        
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                verify(); //primero verificas que te hayas registrado correctamente
                location.hash = "#/userinfo"// solo despues de registrarte correctamente nos redirige a la siguiente pagina.
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            })
    },
    functionLogin: () => {
        
        let logInEmail = document.getElementById("login-email").value;
        let logInPassword = document.getElementById("login-password").value;
        firebase.auth().signInWithEmailAndPassword(logInEmail, logInPassword)
            .catch(function (error) {
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;
                // ...
                console.log(errorCode);
                console.log(errorMessage);
            });
    },
    observe: () => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                window.firebaseFunction.write(user);
                console.log("existe usuario activo");
              // User is signed in.
              let displayName = user.displayName;
              let email = user.email;
              let emailVerified = user.emailVerified;
              console.log(user.emailVerified);
              let photoURL = user.photoURL;
              let isAnonymous = user.isAnonymous;
              let uid = user.uid;
              let providerData = user.providerData;
              // ...
            } else {
              // User is signed out.
              console.log("no existe usuario activo");
              let provider = firebase.auth.GoogleAuthProvider();
              firebase.auth().signInWithRedirect(provider);
              // ...
            }
          });
        },
    write: (user) => {
            // let user1 = user; 
            let content = document.getElementById ("content");
            if(user.emailVerified){
                content.innerHTML = "Login exitoso";
            }
        },
        // observe();
    verify: () => {
        let user = firebase.auth().currentUser;
        user.sendEmailVerification()
        .then(function() {
            alert("Revisa tu correo, debes verificar tu cuenta");
            console.log("enviando correo...");
          // Email sent.
        }).catch(function(error) {
            console.log(error);
          // An error happened.
        });
        }
};

