//>>>>alets:
//1. alert('hey')

/*2 ventana de confirmacion
una venta donde el usuario puede aceptar o cancelar.
retorna verdadero o falso dependiendo de la respuesta del usuario. */

/* const ingresar =()=>{
   const accesoPermitido= confirm('eres mayor de edad');
    if(accesoPermitido){
        alert('bienvenido')
    }else{
        alert('le dire a tus padres')
    }
} */

//3a ventana
/* const saludo=()=>{
    const name =prompt('escribe tu nombre')
    alert(`Bienvenida ${name}`)
} */

//>>>>timer
/* const saludo =()=>{
    console.log('hola');

}
let id;
const iniciar=()=> {
    console.log('iniciando timer');
    
     id=setTimeout(saludo,5000)

}
const parar=()=>{
    console.log('parando timer');
    clearTimeout(id)
} */

//>>>>window.setInterval()
//nos permite ejecutar una funcion cada cierto tiempo
//hasta que se detiene con clearInterval()
let cuenta = 0;
let id;
 const iniciar =()=>{
    id=setInterval(()=>{
        console.log(cuenta);  
        cuenta++
    },1000)
} 
const parar =()=>{
    console.log('paramos la cuenta');
    clearInterval(id); //detener intervalo
}