let timeline = {
    render : async () => {
       let view =  /*html*/
       `
    <main class="timeline">
        <div class="nav">
            <ul class="menu-izq">
                <li><img class="imagen" src="./Imagenes/menu.png" alt="imagen" /></li>
                <li><img class="imagen" src="./Imagenes/fondel.png" alt="folder" /></li>
                <li><img class="imagen" src="./Imagenes/ubicacón.png" alt="descripcion" /></li>
            </ul>
            <ul class="menu-der">
                <li><img class="imagen"  src="./Imagenes/mensaje.png" alt="descripcion" /></li>
            </ul>
        </div>
        <div>
            <div class="cajas">
                <img class="imagen" src="./Imagenes/usuario.png" />
                <p>Jose<br> tamales de la roma son los mejores que he comido.</p>
            </div>
            <div class="cajas">
                <img class="imagen" src="./Imagenes/usuario.png" />
                <p>Maria<br> Los tacos de don toño en la roma,estan deliciosos.</p>
            </div>
            <div class="cajas">
                <img class="imagen" src="./Imagenes/usuario.png" />
                <p>Raúl<br> Las mejores pizzas!</p>
            </div>
        </div>
    </main>
        `;
       return view
   }
   , after_render: async () => {
    // const signUp = document.getElementById("confirm-signup");
 
   
    // signUp.addEventListener("click", () => window.firebaseFunction.register());
    //  window.firebaseFunction.observe();
   }
 }
 export default timeline;