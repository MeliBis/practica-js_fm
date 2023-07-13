const formulario= document.forms['formulario-donacion'];

//evento submit
//nos permite detectar cuando el usuario intenta enviar un formulario

formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
   //console.log('enviando datos');  
})

//event change
formulario.pais.addEventListener('change', (e)=>{
    console.log('el pais cambuo');
    console.log('el nuevo valor es: ' + e.target.value);
})
formulario['cantidad-5'].addEventListener('change',()=> console.log('la cantidad cambio'))
formulario['cantidad-10'].addEventListener('change',()=> console.log('la cantidad cambio'))

//hacer focus
formulario.correo.addEventListener('focus', ()=> {
    console.log('el input correo ahora es el foco de atencion'); 
})
//hacer blur
formulario.correo.addEventListener('blur', ()=> {
    console.log('el input correo ya no es el foco de atencion'); 
})
//event keydown
formulario.correo.addEventListener('keydown', (e)=> {
    console.log(e);
})
//keyup
formulario.correo.addEventListener('keyup', (e)=> {
    console.log(e);
})