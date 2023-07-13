const formulario = document.getElementById('formulario-donacion')
formulario.addEventListener('submit',(e)=>{
        e.preventDefault()

        const expresionRegular=/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

        const datos={
            correo: formulario.correo.value
        }
        //console.log(expresionRegular.test(datos.correo));

        //comprobando correo

         if(!expresionRegular.test(datos.correo)){
            console.log('correo invalido');
            return
        } 
console.log(datos);
console.log('enviando datos...');

})


