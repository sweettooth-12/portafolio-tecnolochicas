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