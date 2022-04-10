import axios from "axios";
//axios es la libreria para hacer peticiones

const URL = `${process.env.REACT_APP_API}/Productos`
//el env es un objeto que va ayudarte a acceder a tus variables de entorno
// para utilizar await tengo que utilizarlo dentro de un bloque que sea de async


const obtenerProductos = async(busqueda = "") => {
    try {
        let { data } = await axios.get(`${URL}?search=${busqueda}`)
        return data //ya tenemos los datos
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
    obtenerProductos

}

