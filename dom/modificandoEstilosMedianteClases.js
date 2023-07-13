const primeraCaja = document.querySelector('#contenedor1 .caja');
//console.log(primeraCaja.classList);

const agregarClase =()=>{
    primeraCaja.classList.add('activa');
}

const eliminarClase=()=>{
    primeraCaja.classList.remove('activa');

}
//permite alternar clase
const toggleClase=()=>{
    primeraCaja.classList.toggle('activa');

}
const comprobarClase=()=>{
    if(primeraCaja.classList.contains('activa')){
        console.log('la clase tiene la clase "activa"');
    }else{
        console.log('la caja no tiene la clase "activa"');
        
    }
    console.log('y contiene las siguientes clases')
    primeraCaja.classList.forEach((clase)=>{
        console.log(clase);
    })
    
}