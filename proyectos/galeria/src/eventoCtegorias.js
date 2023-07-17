import dataFotos from './datos/fotos'
const contenedorCategorias =document.getElementById('categorias');
const galeria = document.getElementById('galeria')

contenedorCategorias.addEventListener('click',(e)=>{
    e.preventDefault()
    //console.log(e.target.closest('a'));
    if(e.target.closest('a')){
        galeria.classList.add('galeria--active');
        document.body.style.overflow="hidden";

        //console.log(dataFotos);
        const categoriaActiva= e.target.closest('a').dataset.categoria;
        const fotos= dataFotos.fotos[categoriaActiva];
        const carousel= galeria.querySelector('.galeria__carousel-slides')
        //console.log(fotos);
        carousel.innerHTML= ''
            fotos.forEach((foto) => {
                const slide= `
                    <a href="#" class="galeria__carousel-slide">
                        <img class="galeria__carousel-image" src="${foto.ruta}" alt="" />
                    </a>
                `;
                galeria.querySelector('.galeria__carousel-slides').innerHTML += slide;
           });
           galeria.querySelector('.galeria__carousel-slides').classList.add('galeria__carousel-slides--active')
    }
})