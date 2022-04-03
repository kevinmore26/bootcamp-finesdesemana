import axios from "axios";
//axios es la libreria para hacer peticiones

const URL = `${process.env.REACT_APP_API}/Productos`
//el env es un objeto que va ayudarte a acceder a tus variables de entorno
// para utilizar await tengo que utilizarlo dentro de un bloque que sea de async

const obtenerProductos = async () =>{
    try{
        //intenta ejecutar este bloque de codigo
        // equivalente al .then 
        let {data} = await axios.get(URL)
        return data 
    }catch{
                console.log('error')
            //si hay errores captura ese error
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

