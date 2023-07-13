/* const boton1=document.getElementById('boton1');
const primeraCaja=document.querySelector('.caja')
 */
//toggle alterna
/* boton1.addEventListener('click',(e)=>{
    console.log(e);
    primeraCaja.classList.toggle('activa')
});
 */

const cajas =document.querySelectorAll('.caja');

cajas.forEach((caja)=>{
    caja.addEventListener('click', (e)=>{
        console.log(e);
        console.log(`haz hecho click en la ${e.target.innerHTML}`);
    })
})