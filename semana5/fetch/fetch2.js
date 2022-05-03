 


//POST

const crearMascota = ()=>{
    const nuevoProducto = {
        prod_nombre:"juanito",
        prod_stock : 3,
        prod_descripcion : "está rico",
        prod_imagen:"http://placeimg.com/640/480/fashion"
    }
    const cabecera = {
        method:'POST', //PUT, DELETE
        headers:{
            //para que la API sepa cómo procesarlo
            'Content-type':'application/json'
        },
        body:JSON.stringify(nuevoProducto)

    }
    // fetch(url,configuracion)
    fetch("https://6104aae64b92a000171c5ca7.mockapi.io/Productos",cabecera)

    .then((respuesta)=>{
        //info del response
        console.log(respuesta)
        return respuesta.json()
        //la respuesta la convierta 
    })
    .then((mascotaCreada)=>{
        console.log(mascotaCreada)
    })
    .catch((error)=>{
        console.error(error)
        
    })

}

crearMascota()

//ACTUALIZAR
 