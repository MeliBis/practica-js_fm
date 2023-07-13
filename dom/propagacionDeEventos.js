const contenedor=document.getElementById('contenedor1')
contenedor.addEventListener('click', ()=>{
    alert("Hola mundo")
})
const primeraCaja=document.querySelector('.caja')
primeraCaja.addEventListener('click', (e)=>{
    e.stopPropagation()
    console.log('hiciste click en la caja 1');
})