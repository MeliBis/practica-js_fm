//console.log(document.forms['formulario-donacion']['correo'].value);

document.getElementById('btnEnviar').addEventListener('click', (e)=>{
    e.preventDefault();
    
    
     const correo= document.querySelector('#formulario-donacion [name="correo"]')
    console.log(correo.value); 

    console.log(document.forms['formulario-donacion']['pais'].value)

    //acceder a radio button
    const formulario = document.forms['formulario-donacion']
    console.log(formulario['donacion'].value);

    //acceder a la fecha
    console.log(formulario.fecha.value);

    //acceder a terminos y condiciones
    console.log(formulario['terminos-y-condiciones'].checked);
})
