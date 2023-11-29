document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.getElementById("blog");
    const cambiarImagenBtn = document.getElementById("cambiarImagen");
  
    let currentImageIndex = 0;
  
    const images = [
        "imagenes/imagen1.webp",
        "imagenes/imagen.png",
        "imagenes/imagen2.png",
        "imagenes/imagen3.png",
        "imagenes/imagen4.webp",
        "imagenes/imagen5.webp",
        "imagenes/imagen6.jpg",
        "imagenes/imagen7.webp",
        "imagenes/imagen10.jpg",
        "imagenes/imagen11.jpg",
      // Agrega más nombres de archivo según sea necesario
    ];
  
    cambiarImagenBtn.addEventListener("click", function () {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      blogContainer.innerHTML = `<img src="${images[currentImageIndex]}" alt="Imagen ${currentImageIndex + 1}">`;
    });
  });
  