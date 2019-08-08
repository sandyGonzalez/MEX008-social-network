window.firebaseFunction = {
    register: () => {
        // console.log("diste un click");
        let email = document.getElementById("signup-email").value;
        let password = document.getElementById("create-password").value;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                window.firebaseFunction.verify();
            })
            .catch(function (error) {
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
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
              // ...
            }
        });
    },
    write: (user) => {
            // let user1 = user; 
            let content = document.getElementById("content");
        if (user.emailVerified) {
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
            }).catch(function (error) {
                console.log(error);
          // An error happened.
            });
    },
    loginGoogle: () => {
            const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (user) {
            console.log(user);
            // This gives you a Google Access Token. You can use it to access the Google API.
            const token = result.credential.accessToken;
            console.log(token);
        // The signed-in user info.
            const userId = result.user;
            console.log(userId);
            
        }).catch(function (error) {
            // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
        });
    },
    loginFacebook: () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const token = result.credential.accessToken;
            // The signed-in user info.
        const user = result.user;
            // ...
        }).catch(function (error) {
            // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
            // ...
        });
    }
};

