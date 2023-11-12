
// Código para realizar animación mediante el scroll
var elementos = document.querySelectorAll('.animacionscrol');

function animarElementos() {

    elementos.forEach(elemento=>{
        var posicionScroll = window.innerHeight - elemento.getBoundingClientRect().top;

        if (posicionScroll > 0) {
            elemento.classList.add('animacion-activa');
        }
    });
}

//Ejecutamos la funcion animarElementos
window.addEventListener('scroll', animarElementos);
animarElementos();

//Función para las anclas
let anclas = document.querySelectorAll('.ancla');

anclas.forEach(enlace=>{
    enlace.addEventListener('click', smoothScroll);
});

function smoothScroll(event) {
    event.preventDefault();
    const target = document.querySelector(event.target.getAttribute('href'));
    const topOffset = 50; // Ajusta el valor según el desplazamiento deseado
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
      });
}

// Cambiamos el z-index al boton-regreso para poder navegar sobre la pagina que posee z-index menores
let botonOcultar = document.querySelector('.boton-regreso');
// let contenedorheader = document.querySelector('.header, .header__wave');
let contenedoresheader = document.querySelector('.header__wave, .header');
//let header__wave = document.querySelector('.header__wave');


window.addEventListener('scroll', () => {
    const fixedRect = botonOcultar.getBoundingClientRect();
    const targetRect = contenedoresheader.getBoundingClientRect();
  
    if (
      fixedRect.right >= targetRect.left &&
      fixedRect.left <= targetRect.right &&
      fixedRect.bottom >= targetRect.top &&
      fixedRect.top <= targetRect.bottom
    ) {

      // Si el botón fijo pasa sobre el elemento objetivo
      //mostramos el botón que permite subir al inicio de la pagína
      botonOcultar.style.display = "none";

    }
    else {
      
      // El botón fijo pasa sobre el elemento objetivo mostramos el botón que permite subir al inicio de la pagína
      botonOcultar.style.display="block"; 
    }
  });