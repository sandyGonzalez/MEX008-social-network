let welcome = {
  render : async () => {
      let view = /* html */ `
      <section class="welcome">
      <section class="welcome-text">
        <h2>Bienvenid@ a</h2>
      </section>
      <figure class="logo">
        <img src="img/foodlova.png" alt="logo-foodLova">
      </figure>
      <section class="welcome-description-text">
        <p>Donde todos somos glotones y lo presumimos</p>
      </section>
      <button class="button-go">Vamos!</button>
    </section>
      `
      return view
  },
  after_render : async () => {}
}

export default welcome;

