//window.alert('hola')
//console.log(`la ventana de tu navegador mide : ${window.innerWidth}px de ancho`);
//console.log(`la ventana de tu navegador mide : ${window.innerHeight}px de alto`);

/* window.open()
Nos permite abrir ventanas del navegador
Nota: es posible que el navegador te pida persmisos 
parseFloatabrir una nueva ventana
-1er parametro:direccion de la nueva ventama.
-2o parametro: nombre de la ventana
-3er parametro: cadena de texto de opciones

Nos devuelve un  */

let ventana;
const abrirVentana = () =>{
    ventana = window.open('https://google.com','mi nueva ventana', 'width=500,height=500');
    ventana.document.write('<h1>hola, escribiendo en la nueva ventana</h1>')
   
} 
const cerrarVentana= ()=>{
    ventana.close();
}

//screen object
//representa la pantalla del usuario))
console.log('ancho de la pantalla: ', window.screen.width);
console.log('alto de la pantalla: ', window.screen.height);
console.log('ancho de pantalla sin barra de windows: ', window.screen.availWidth);
console.log('alto de pantalla sin barra de windows: ', window.screen.availHeight);
console.log('------------');

//barra de direcciones
console.log(location.href);

console.log('------------');
//hotname - retorna el host de la pagina actual
console.log(location.hostname);

console.log('------------');

//patname -retorna la ruta y archivo de la pagina actual
console.log(location.pathname);
console.log('------------');

//obtener el protocolo- retorna el protocolo utilizado
console.log(location.protocol);

//cargar documento
const cargarDocumento = ()=>{
    location.assign('https://google.com')
}
console.log('------------');

