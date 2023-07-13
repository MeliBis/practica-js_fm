const ultimaCaja= document.querySelector('#contenedor2 .caja:last-child');
ultimaCaja.style.background = '#000';
ultimaCaja.style.color='#fff';
ultimaCaja.style.borderRadius='23px'

const cajas=document.querySelectorAll('.caja');
let tamaño =24;

 
const incrementarFuente=()=>{
    cajas.forEach((caja) => {
        console.log(caja);
        tamaño++;
        caja.style.fontSize=`${tamaño}px`
    });
} 
 const disminuirFuente=()=>{
    cajas.forEach((caja) => {
        tamaño--;
        caja.style.fontSize=`${tamaño}px`
    });
} 