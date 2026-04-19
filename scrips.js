function mostrarImagen(card) {

  let img = card.querySelector(".imagen");


  let estaAbierta = img.style.display === "block";


  document.querySelectorAll(".imagen").forEach(i => {
    i.style.display = "none";
  });


  if (!estaAbierta) {
    img.style.display = "block";
  }
}