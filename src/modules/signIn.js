let signIn = {
render : async () => {
  let view =  /*html*/`
  <main class="sign-in">
    <div class="header">
      <img class="logo" src="./Imagenes/foodlova.png" alt="logo">
      <img class="small-imgs" src="./Imagenes/fila_imgs.png" alt="imgs comida">
    </div>
    <div class="sign-in-options">
      <h3>Crear cuenta</h3>
      <div class="modal-imgs">
        <a href="#facebook-modal">
          <img class="fb-logo" src="./Imagenes/logo_fb.png" alt="logo fb">
        </a>
        <a href="#google-modal">
          <img class="google-logo" src="./Imagenes/logo_google.png" alt="logo google">
        </a><br>
      </div>
      <div class="modal-options">
        <p>O</p>
        <a href="#/userform">Correo electrónico</a>
      </div>
      </div>
      <div class="sign-in-footer">
        <a href="#/"><i class="fas fa-arrow-left"></i></a>
      </div>
    </div>
  </main>

<main id="google-modal" class="modal">
  <div class="modal-content">
      <span class="close">&times;</span>
  <h3>Crear cuenta con Google</h3>
      <form action="" class=".form-google">
        <p class="email-modal-google">Correo: </p>
        <input type="email" class="google-email">
        <p class="password-modal-google">Contraseña: </p>
        <input type="text" name="" id="google-password">
        <figure>
          <a href="#" class="close-modal">Siguiente</a>
        </figure>
        </form>
  </div>
  </main>

  <main id="facebook-modal" class="modal">
      <div class="modal-content">
          <span class="close">&times;</span>
      <h3>Crear cuenta con Facebook</h3>
          <form action="" class=".form-google">
            <p class="email-modal-facebook">Correo: </p>
            <input type="email" class="facebook-email">
            <p class="password-modal-facebook">Contraseña: </p>
            <input type="password" name="" id="facebook-password">
            <figure>
              <a href="#" class="close-modal">Siguiente</a>
            </figure>
            </form>
      </div>
      </main>
  `
  return view
}
, after_render: async () => {}
}
export default signIn;
