let intro = {
  render : async () => {
      let view = /* html */ `
      <main class="intro">
        <div class="logo">
          <img src="./Imagenes/foodlova.png" alt="logo">
        </div>
        <div class="intro-text">
          <p>¿Estás list@ para formar parte de la red social más glotona de la CDMX?</p>
        </div>
        <div class="btns">
          <a href = "./#/signin">Crear Cuenta</a>
          <p>O</p>
          <a href = "./#/login">Iniciar Sesión</a>
        </div>
      </main>
      `
      return view
  },
  after_render : async () => {}
}

export default intro;
// let intro = `
// <main class="intro">
//         <div class="logo">
//           <img src="./Imagenes/foodlova.png" alt="logo">
//         </div>
//         <div class="intro-text">
//           <p>¿Estás list@ para formar parte de la red social más glotona de la CDMX?</p>
//         </div>
//         <div class="btns">
//           <button>Crear una cuenta</button>
//           <p>O</p>
//           <button>Inicia sesión</button>
//         </div>
//       </main>
// `;

// module.exports = intro;