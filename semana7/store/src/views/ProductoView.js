
import { useParams } from "react-router-dom"
import { useState,useEffect,useContext } from "react"
import { CarritoContext } from "../context/carritoContext"
import { obtenerProductoPorId } from "../services/productosService"
import Loading from "../components/Loading"
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
//el useParams de react router sirve para obtener acceso a los datos de tu URL para una ruta
//gracias al useParams me permitirá devolver el ID
export default function ProductoView(){

    const [producto,setProducto] = useState([])
    const [cargando,setCargando] = useState(true)
    const {anadirACarrito} = useContext(CarritoContext)
    const navigate = useNavigate()

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

    const anadirACarritoContext =()=>{
        
        anadirACarrito(producto)
        const resultado = Swal.fire({
            icon:'success',
            title:'Producto añadido',
            showConfirmButton:true,
            showDenyButton:true,
            confirmButtonText:'Seguir comprando' ,
            denyButtonText:'Ir a carrito'
        })

        .then((resultado) => {
        
        if(resultado.isConfirmed){
            console.log('isconfirmed')
           navigate('/')
        }else if(resultado.isDenied){
            console.log('isDenied')
            navigate('/carrito')
      }
})



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

                                <button className="btn btn-dark btn-lg"
                                onClick={anadirACarritoContext}  >
                                <i className="fas fa-shopping-cart"></i>
                                        Añadir al carrito
                                </button>
                               
                                   
                            </div>
                        </div>
                    </div>
                </div>
           </div>)}
        </div>
    )

}