
/* TAREA 1: Párrafo que cambiará de estilo */
const botonEstilo = document.getElementById('botonEstilo');
const parrafo = document.getElementById('parrafo');

botonEstilo.addEventListener('click', () => {
    parrafo.style.color = 'purple';
    parrafo.style.fontSize = '20px';
    parrafo.style.fontFamily = '"Comic Sans MS", cursive, sans-serif';
});




/*TAREA 2: Formulario con nombre y apellido*/

const formulario = document.getElementById('form1');

formulario.addEventListener("submit", function(evento){
    evento.preventDefault(); // Evita que la página se recargue

    
    const fname = formulario.fname.value;
    const lname = formulario.lname.value;
    
    console.log(`Nombre: ${fname}\nApellido: ${lname}`);
});


/*TAREA 3: Mostrar alerta con información de enlaces*/
const botonEnlaces = document.getElementById('botonEnlaces');

botonEnlaces.addEventListener('click', () => {
   
    const enlaces = document.querySelectorAll('a');

    const totalEnlaces = enlaces.length;

   
    const primerEnlace = enlaces[0].href;
    const ultimoEnlace = enlaces[enlaces.length - 1].href;

   
    alert(
        `Información de Enlaces:
        - Total de enlaces: ${totalEnlaces}
        - Primer enlace: ${primerEnlace}
        - Último enlace: ${ultimoEnlace}`
    );
});


