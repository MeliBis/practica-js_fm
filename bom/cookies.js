 const crearCookie=() =>{
    //document.cookie = 'nombre=Meli'
    document.cookie = 'nombre=Meli; expire=12 Jul 2023 01:00:00 UTC'
}

const iniciarSesion=()=>{
    const usuario = prompt('usuario: ')
    document.cookie = `nombre=${usuario}; expire=12 Jul 2023 01:00:00 UTC`
    alert('sesion iniciada')
}
console.log(document.cookie);
 

let usuario;
const cookies= document.cookie.split(';');

cookies.forEach((cookie)=>{
    const propiedad = cookie.split('=')[0];
    if(propiedad === 'nombre'){
        usuario = cookie.split('=')[1]
    }
})
if(usuario){
    console.log('hola '+ usuario);
    
}else{
    console.log('por favor inicia sesion');
    
}
const cerrarSesion=()=>{
    document.cookie= 'nombre=; expires=1 Jan 2020 01:00:00 UTC'
    console.log('hasta luego');
    
}