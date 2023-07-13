const contenedor=document.getElementById('contenedor1')
contenedor.addEventListener('click', ()=>{
    console.log("haz hecho click en el contenedor")
},true)
const primeraCaja=document.querySelector('.caja')
primeraCaja.addEventListener('click', (e)=>{
    
    console.log('hiciste click en la caja 1');
})