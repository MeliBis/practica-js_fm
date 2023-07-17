import dataCategorias from './datos/categorias'

const {categorias} = dataCategorias;
const contenedorCategorias = document.getElementById('categorias')

categorias.forEach((categoria)=> {
        const nuevaCategoria=document.createElement('a');
        const platilla= `
            <img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
            <div class="categoria__datos">
                <p class="categoria__nombre">${categoria.nombre}</p>
                <p class="categoria__numero-fotos">${categoria.numeroFotos} fotos</p>
            </div>
    `

    nuevaCategoria.innerHTML=platilla;
    nuevaCategoria.classList.add('categoria')
    nuevaCategoria.href='#'
    nuevaCategoria.dataset.categoria= categoria.id;

    contenedorCategorias.append(nuevaCategoria)
})
