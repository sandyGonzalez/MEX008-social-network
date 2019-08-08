let timeline = {
    render : async () => {
       let view =  /*html*/
       `
       <div class="nav">
       <ul id="menu-izq">
           <li><a href="menu.png" title=""><img class="imagen" src="./Imagenes/menu.png" alt="imagen" /></a></li>
           <li><a href="enlace2.html" title=""><img class="imagen" src="./Imagenes/fondel.png" alt="folder" /></a></li>
           <li><a href="enlace3.html" title=""><img class="imagen" src="./Imagenes/ubicacón.png" alt="descripcion" /></a></li>
       </ul>
       <ul id="menu-der">
           <li><a href="enlace3.html" title=""><img class="imagen"  src="./Imagenes/mensaje.png" alt="descripcion" /></a></li>
       </ul>
   </div>
   <div>
       <div class="cajas">
           <img class="imagen" src="./Imagenes/usuario.png" />
           <p>Jose<br> tamales de la roma son los mejores 
               que he comido.
           </p>
       </div>
       <div class="cajas">
           <img class="imagen" src="./Imagenes/usuario.png" />
           <p>Maria<br> Los tacos de don toño en la roma,estan deliciosos.</p>
       </div>
       <div class="cajas">
           <img class="imagen" src="./Imagenes/usuario.png" />
           <p>Raúl<br> las mejores pizzas!</p>
   
          
       </div>
   </div>`;
       
       return view
   }
   , after_render: async () => {
    // const signUp = document.getElementById("confirm-signup");
 
   
    // signUp.addEventListener("click", () => window.firebaseFunction.register());
    //  window.firebaseFunction.observe();
   }
 }
 export default timeline;