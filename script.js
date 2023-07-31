// Función para reproducir el sonido de la cámara
function playCameraSound() {
    const cameraSound = document.getElementById('cameraSound');
    cameraSound.currentTime = 0; // Reinicia la reproducción del sonido si ya está sonando
    cameraSound.play();
  }
  
  // Código para el desplazamiento automático del carrete panorámico
  const panorama = document.querySelector('.panorama');
  let scrollAmount = 0;
  const scrollStep = 1; // Ajusta la velocidad del desplazamiento
  
  function scrollPanorama() {
    panorama.scrollTo(scrollAmount, 0);
    scrollAmount += scrollStep;
  
    if (scrollAmount >= panorama.scrollWidth - panorama.clientWidth) {
      scrollAmount = 0;
    }
  
    requestAnimationFrame(scrollPanorama);
  }
  
  scrollPanorama();
  
  // Código para el paneo automático de imágenes
  const images = document.querySelectorAll('.panorama img');
  let currentImageIndex = 0;
  const imageWidth = images[0].clientWidth;
  const transitionDuration = 3000; // Duración de la animación en milisegundos
  const transitionDelay = 3000; // Retraso entre animaciones en milisegundos
  
  function panImages() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    const offset = -currentImageIndex * imageWidth;
    panorama.style.transform = `translateX(${offset}px)`;
  
    setTimeout(panImages, transitionDelay);
  }
  
  setTimeout(panImages, transitionDuration);





