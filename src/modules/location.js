let location = {
    render : async () => {
        let view = /* html */ `
        <main class="location-places">
    <header>
      <nav class="nav-timeline">
        <img src="./img/menu.png" alt="imagen-menu">
        <img src="./img/folded-newspaper.png" alt="imagen-noticias">
        <img src="./img/facebook-placeholder-for-locate-places-on-maps.png" alt="imagen-location">
        <img src="./img/envelope.png" alt="imagen-imbox">
      </nav>
        </header>
    <figure class="location-map">
      <P>AQUI DEBERIA HABER UN MAPA</P>

    </figure>
    <section class="nearby-places">
      <section class="tacos-lety-ii">
        <h4>Tacos Lety</h4>
        <p>puntuaciones: 4.0</p>
       <!--  Cambiar el boton por una <a></a>  -->
        <button class="opinions-button">opiniones</button> 
        <p>cierra a las: 21:00</p>

      </section>
      <hr>
      <section class="pizzas-garcia">
        <h4>Pizzas Garcia</h4>
        <p>Puntuaciones: 4.3</p>
        <!--  Cambiar el boton por una <a></a>  -->
        <button class="opinions-button">opiniones</button>
        <p>Cierra a las 21:00</p>

      </section>

    </section>
  </main>
       
        `
        return view
    },
    after_render : async () => {}
  }

  export default location;


