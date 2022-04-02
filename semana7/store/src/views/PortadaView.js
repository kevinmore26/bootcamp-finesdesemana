import {useState, useEffect } from 'react'
import { obtenerProductos } from '../services/productosService'
import GroupProducts from '../components/GroupProducts'
import CustomCarousel from '../components/CustomCarousel'

export default function PortadaView(){
    const [productos, setProductos ] = useState([])

    const getProductos = async() =>{
        try{
            let productosObtenidos = await obtenerProductos()
            setProductos(productosObtenidos)
        }catch{

        }
    }

    useEffect(()=>{
        getProductos()
    },[])

    // el [] sirve para que no sea un bucle 
    // PROPS :{ productos, alimentos}
    return(
            <div>
                <CustomCarousel/>
                    <GroupProducts  productos={productos}/>
            </div>
    )
}
