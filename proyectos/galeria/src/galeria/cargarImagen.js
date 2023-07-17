import data from '../datos/fotos'

const galeria= document.getElementById('galeria');
const cargarImagen=(id, nombre, ruta, descripcion)=>{
    galeria.querySelector('.galeria__imagen').src = ruta;
    galeria.querySelector('.galeria__imagen').dataset.idImagen = id;
    galeria.querySelector('.galeria__titulo').innerHTML = nombre;
    galeria.querySelector('.galeria__descripcion-imagen-activa').innerHTML = descripcion;

    const categoriaActual= galeria.dataset.categoria;
    const fotos= data.fotos[categoriaActual]

    let indexImagenActual;
    fotos.forEach((foto, index) => {
        if(foto.id == id){
            indexImagenActual= index;
        }
    });

    
    //eliminar la clase active de cualquier slide
    
    galeria.querySelector('.galeria__carousel-slides--active').classList.remove('galeria__carousel-slides')
    
    //cargar imagen como activa
    if(galeria.querySelectorAll('.galeria__carousel-slides').length > 0){
        galeria
            .querySelectorAll('.galeria__carousel-slides')
            [indexImagenActual].classList.add('galeria__carousel-slides--active');

    }

}

const cargarAnteriorSiguiente=(direccion) => {
    const categoriaActual= galeria.dataset.categoria;
    const fotos = data.fotos[categoriaActual]
    const idImagenActual=parseInt(galeria.querySelector('.galeria__imagen').dataset.idImagen);

    let indexImagenActual;
    fotos.forEach((foto, index)  => {
        if(foto.id === idImagenActual){
            indexImagenActual=index;
        }
    });

    if(direccion === 'siguiente'){
        //console.log('cargando siguiente imagen');
        //console.log(fotos[indexImagenActual +1]);
        if(fotos[indexImagenActual +1]){
            const {id,nombre, ruta, descripcion}= fotos[indexImagenActual + 1];
            cargarImagen(id, nombre, ruta, descripcion)

        }else if(direccion === 'Anterior'){
            if(fotos[indexImagenActual -1]){
                const {id,nombre, ruta, descripcion}= fotos[indexImagenActual - 1];
                cargarImagen(id,nombre, ruta, descripcion)
        }
    }
}

export { cargarImagen, cargarAnteriorSiguiente };