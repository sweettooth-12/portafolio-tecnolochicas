// alert("Hola Mundo <3");

let nombre = document.getElementById('nombre');

let typewriternombre = new Typewriter(nombre, {
  loop: true,
  delay: 75,
});

// .nombreDeAccion('Accion')
typewriternombre
  .pauseFor(2500) //milisegundos
  .typeString('<span style="color: #27ae60;">¡Hola! Soy Radha</span>')
  .pauseFor(300)
  .deleteAll()
  .typeString('<span style="color: #27ae60;">Data Scientist Jr</span>')
  .pauseFor(1000)
  .start();

  let audioElement; //Variable para almacenar el objeto de Audio

  const mainElement = document.querySelector('main'); //Seleccionar la etiqueta <main>

  mainElement.addEventListener('click', function () {
    if (!audioElement) {
      audioElement = new Audio('assets/musica/rey.mp3');
      audioElement.volume = 0.1;
    }
    audioElement.play();
  });

  const pauseButton = document.getElementById('pauseButton');

  pauseButton.addEventListener('click', function (){
    if (audioElement.paused) {
      audioElement.play();
      pauseButton.textContent = "Pausar";
    } else {
      audioElement.pause();
      pauseButton.textContent = "Reanudar";
    }
  });
  
async function copiarAlPortapapeles(texto) {
  try {
    await navigator.clipboard.writeText(texto);
    alert('Texto copiado al portapapeles');
  } catch (err) {
    console.error('Error al copiar', err);
  }
}