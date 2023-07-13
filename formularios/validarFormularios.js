const formulario = document.getElementById('formulario-donacion')
formulario.addEventListener('submit',(e)=>{
e.preventDefault()


const datos={
    correo: formulario.correo.value,
    pais: formulario.pais.value,
    donacion: formulario.donacion.value,
    fecha: formulario.fecha.value,
    terminos:formulario['terminos-y-condiciones'].checked
}
/* const correo=formulario.correo.value;
const pais= formulario.pais.value;
 */
//comprobando correo
if(datos.correo.length <=2){
    console.log('correo invalido');
    return
}

//comprobamos pais
if(datos.pais ===''){
    console.log('pais invalido');
    return
}
if(datos.donacion === ''){
    console.log('selecciona una cantidad a donar');
    return
}
if(datos.fecha === ''){
    console.log('selecciona una fecha');
    return
}
if(!datos.terminos){
    console.log('acepta los terminos y condiciones');
    return
}

console.log(datos);
console.log('enviando los datos...');

})


