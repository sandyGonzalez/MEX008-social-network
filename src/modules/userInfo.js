let userinfo = {
  render : async () => {
    let view =  /*html*/`
    <main class="user-info">
    <div class="user-info-header">
      <img src="./Imagenes/fila_imgs.png" alt="imgs comida">
    </div>
    <div>
      <img src="" alt="foto de usuario">
    </div>
    <div class="info-inputs">
      <label for="name">Nombre:</label>
      <input type="text"><br>
      <label for="nickname">Apodo:</label>
      <input type="text"><br>
      <label for="user_info">Un poco sobre ti:</label><br>
      <input type="text">
    </div>
    <div class="user-info-footer">
        <i class="fas fa-arrow-left"></i>
        <a href = "./#/welcome"> Listo</a>
    </div>
  </main>
    `
    return view
}
, after_render: async () => {}
}
export default userinfo;


