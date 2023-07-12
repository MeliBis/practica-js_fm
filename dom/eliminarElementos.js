const eliminarCaja=()=>{
    const padre = document.getElementById('contenedor1');
    const cajaEliminar = padre.querySelector('.caja')
    console.log(cajaEliminar);
    
    if(cajaEliminar){
        padre.removeChild(cajaEliminar)
        
    }
}