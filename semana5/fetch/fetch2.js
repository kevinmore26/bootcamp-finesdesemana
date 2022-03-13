//GET
const obtenerMascotas = ()=>{
    //GET
    fetch("https://622e09a98d943bae348cff73.mockapi.io/mascotas")

    .then((respuesta)=>{
        //info acerca de la petición
        console.log(respuesta)
        return respuesta.json()
    })
    .then((datos) =>{
        //desempaco mis datos
        console.log(datos)
    })
    .catch((error) =>{
        console(error)
    })
}

obtenerMascotas()


//POST

const crearMascota = ()=>{
    const nuevaMascota = {
        nombre:"juanito",
        edad : 3,
        color : "blanco"
    }
    const cabecera = {
        method:'POST', //PUT, DELETE
        headers:{
            //para que la API sepa cómo procesarlo
            'Content-type':'application/json'
        },
        body:JSON.stringify(nuevaMascota)

    }
    // fetch(url,configuracion)
    fetch("https://622e09a98d943bae348cff73.mockapi.io/mascotas",cabecera)

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

const actualizarMascota = (id)=>{
    //pongo los campos que tenga en mi api, solo los campos que quiero modificar o actualizar
    const mascotaMoficada ={
        nombre:"pepito",

    }
    const configuracion ={
        method:'PUT',
        headers:{
            //para que la API sepa cómo procesarlo
            'Content-type':'application/json'
        },

        body:JSON.stringify(mascotaMoficada)
    }

    fetch(`https://622e09a98d943bae348cff73.mockapi.io/mascotas/${id}`,configuracion)
    .then((respuesta)=>{
        console.log(respuesta)
        return respuesta.json()
    })
    .then((mascotaActualizada)=>{
        console.log(mascotaActualizada)
    })
    .catch((err)=>{
        console.log(err)
    })
}

actualizarMascota(50)