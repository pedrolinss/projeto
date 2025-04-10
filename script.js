function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar tag img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/pfp-light.jpg")
    img.setAttribute("alt", "Foto de Pedro Lins de óculos escuro")
  } else {
    // se tiver sem light, manter imagem normal
    img.setAttribute("src", "./assets/pfp.jpg")
    img.setAttribute("alt", "Foto de Pedro Lins")
  }

  // pegar tag img

  //substituir a imagem
}
