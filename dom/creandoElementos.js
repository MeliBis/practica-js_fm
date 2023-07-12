const agregarCaja=()=>{
    //crear elemento
    const nuevaCaja= document.createElement('div');
    //agregamos texto y atributos
        nuevaCaja.innerText= 'nueva caja';
    //nuevaCaja.setAttribute('id', 'nuevo-id');
        nuevaCaja.setAttribute('class', 'caja activa')

    //agregamos el elemento al dom
    const contenedor = document.getElementById('contenedor1');
    
    //apendChild
    contenedor.appendChild(nuevaCaja);
    contenedor.insertAdjacentElement('afterbegin', nuevaCaja)


}
const segundaCaja=()=>{
    
    const segundaCaja=document.createElement('div');
        segundaCaja.innerText= 'segunda caja';
        segundaCaja.setAttribute('class', 'caja activa')
        const contenedor2=document.getElementById('contenedor2');
        //contenedor2.appendChild(segundaCaja)
        //contenedor2.insertAdjacentElement('beforebegin',segundaCaja)
        //contenedor2.insertAdjacentElement('beforeEnd',segundaCaja)
        //contenedor2.insertAdjacentElement('afterend',segundaCaja)

        //replaceWith() - nos permite reemplazar el elemento por otro
        const replace= document.querySelector('#contenedor2 .caja1').replaceWith('segundaCaja')

}