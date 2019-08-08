let userform = {
   render : async () => {
      let view =  /*html*/
      `
      <main class="formulario">
          <div class="imagen">
            <img src="./Imagenes/Logo_verde.png" alt="Logo.png">
          </div>
          <div class="form">
             <label for="username">Nombre de usuario</label><br>
             <input type="text" id="username" name="Usuario" class="text"><br>
             <label for="email">Correo Electronico</label><br>
             <input type= "email" id="signup-email" name="electronico" class="text"><br>
             <label for="password">contraseña</label><br>
             <input type="password" id="create-password" name="contraseña" class="text"><br>
             <label for="confirm">Confirma tu contraseña</label><br>
             <input type="password" id="confirm-password" name="confirma" class="text"><br>
          </div>
          <div class="form-btn">
          <a id ="confirm-signup" href = "./#/userInfo">Siguiente</a>
          </div>
        </main>`;
      
      return view
  }
  , after_render: async () => {
   const signUp = document.getElementById("confirm-signup");
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
  }
}
export default userform;

//

