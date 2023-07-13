 const endPoint='https://api.npoint.io/6d2a3cd625b08fc80a5e'

/*fetch(endPoint)
    .then((respuesta)=>{
        console.log('el servidor respondio');
     const promesa=  respuesta.json();
     promesa
        .then((datos)=>{
            console.log(datos.nombre);
        })
        .catch((error)=>{
            console.log(error);

        })
    }).catch((error)=> {
        console.log(error);
    }) */

    //asyn await
    const obtenerDatos= async()=>{
      const respuesta = await fetch(endPoint);
      const datos = await respuesta.json();

      console.log(datos.nombre);
    }
    obtenerDatos()