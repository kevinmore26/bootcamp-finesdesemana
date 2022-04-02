
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import { obtenerProductoPorId } from "../services/productosService"
import Loading from "../components/Loading"
//el useParams de react router sirve para obtener acceso a los datos de tu URL para una ruta
//gracias al useParams me permitirá devolver el ID
export default function ProductoView(){

    const [producto,setProducto] = useState([])
    const [cargando,setCargando] = useState(true)

    const {id} = useParams()

    const getProducto = async()=>{
        try{
            let productoObtenido = await obtenerProductoPorId(id)
            setProducto(productoObtenido)
            setCargando(false)
            //terminar de cargar los datos
            
        }catch{
                console.log('error')
        }
    }

    useEffect(()=>{
        getProducto()
    }, [])
    // va ser una función que se va a ejecutar en el montaje, y para que se cargue una vez es el []

    return (
        <div>
           {cargando ? 
           (<Loading />) : 
           (<div>
               <div className="container">
                   <h2 className="fw-bold">{producto.prod_nombre}</h2>
                   <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <img 
                                className="img-fluid"
                                src={producto.prod_imagen}
                                alt={producto.prod_nombre}
                            />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <h5 className="fw-bold">Descripción</h5>
                            <p>{producto.prod_descripcion}</p>
                            <div className="py-3 d-flex justify-content-between">
                                <span className="fw-bold">
                                    S/ {producto.prod_precio}
                                </span>

                               
                                   
                            </div>
                        </div>
                    </div>
                </div>
           </div>)}
        </div>
    )

}