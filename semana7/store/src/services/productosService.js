import axios from "axios";
//axios es la libreria para hacer peticiones

const URL = `http://127.0.0.1:8000/api/listarProducto/`
//el env es un objeto que va ayudarte a acceder a tus variables de entorno
// para utilizar await tengo que utilizarlo dentro de un bloque que sea de async

const obtenerProductos = async (busqueda = "") =>{
    //en el caso de que yo no le pase nada, toma el valor que le dé.
    //en este caso le estoy pasando que por defecto tome el valor de vacío, gracias a esto , me mostrará todo.
    try{
        //intenta ejecutar este bloque de codigo
        // equivalente al .then 
        let {data} = await axios.get(`${URL}?search=${busqueda}`)
        return data 
    }catch{
        
                console.log('error')
            //si hay errores captura ese error
    }
}

 

const crearProducto = async (nuevoProducto) => {
    try {
        const headers = {
            "Content-Type": "application/json"
        }
        //.post(URL, DATA, HEADERS)
        let { data } = await axios.post(URL, nuevoProducto, { headers })
        return data
    } catch (error) {
        throw error
    }
}


const obtenerProductoPorId = async (id) =>{
    try{    
        let{data} = await axios.get(`${URL}/${id}`)
        return data
    }catch{
        console.log('error')
    }
}

export{
    obtenerProductoPorId,
    obtenerProductos,
    crearProducto,
  
}

