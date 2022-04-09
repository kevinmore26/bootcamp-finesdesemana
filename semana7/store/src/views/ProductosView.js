import {useState, useEffect, useRef} from 'react'
import { obtenerProductos } from "../services/productosService"
import Loading from "../components/Loading"
import GroupProducts from '../components/GroupProducts'
import { Form } from 'react-bootstrap'
import '../App.css'

export default function ProductosView(){

    const[productos,setProductos] = useState([])
    const[cargando,setCargando] = useState(true)
    const inputBusqueda = useRef()

    const getProductos = async() =>{
        try{
            let productosObtenidos = await obtenerProductos() 
            setProductos(productosObtenidos)
            setCargando(false)
        }catch{
                console.log('error')
        }
    }

    const ejecutarBusqueda = async()=>{
        //inputBusqueda.current.value --- aquí se almacena todo lo que escriba
        let miBusqueda = inputBusqueda.current.value
        // lo que almacenamos lo metemos en mi variable "miBusqueda"
        
        const productosFiltrados = await obtenerProductos(miBusqueda)
         setProductos(productosFiltrados)
         
    }


    useEffect(()=>{
        getProductos()
    },[])

    return(
        <div  className='fondoPortada' >
            {cargando?
            (<Loading/>) : 
            (
                <div className='py-4' >
                     <div className='container text-center'> 
                        <h1 className='py-34'>
                        <i className="fas me-3 fa-gift"></i>
                            Nuestros Productos
                        </h1>

                        <div className='col-sm-12 col-md-6'>
                            <h5>Filtro por nombre</h5>
                            <div className='d-flex gap-1'>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        placeholder='Ingrese el nombre o descripcion'
                                        ref={inputBusqueda}
                                    />
                                    <button className='btn btn-dark' onClick={ejecutarBusqueda}>
                                    <i className="fas fa-search"></i>
                                   
                                    </button>
                                 
                            </div>
                           
                        </div>
                     </div>  
                    <GroupProducts productos={productos}/>
                </div>
            )}
        </div>
        
    )
}