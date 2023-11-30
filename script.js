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
  function actualizarReloj() {
    var ahora = new Date();
    
    // Obtener la hora
    var horas = ahora.getHours();
    var minutos = ahora.getMinutes();
    var segundos = ahora.getSeconds();

    // Agregar ceros delante de los números menores a 10
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    // Obtener la fecha
    var dia = ahora.getDate();
    var mes = ahora.getMonth() + 1; // ¡Recuerda que los meses comienzan desde 0!
    var año = ahora.getFullYear();

    // Agregar ceros delante de los números menores a 10
    dia = dia < 10 ? '0' + dia : dia;
    mes = mes < 10 ? '0' + mes : mes;

    var fecha = año + '-' + mes + '-' + dia;

    // Mostrar la hora y la fecha
    var tiempo = horas + ':' + minutos + ':' + segundos + ' - ' + fecha;
    document.getElementById('reloj').innerText = tiempo;
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);

// Llamar a la función inicialmente para evitar un retraso de un segundo
actualizarReloj();
