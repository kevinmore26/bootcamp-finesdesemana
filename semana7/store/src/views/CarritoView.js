import {useContext} from 'react'
import {CarritoContext} from '../context/carritoContext'

export default function CarritoView (){

    const {carrito} = useContext(CarritoContext)
    console.log(carrito)
    return(
        <div>
                <div className="container">
                    <div className='my-4 text-center'>
                        <h1>
                            Carrito de compra
                        </h1>

                    </div>

                </div>

                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <th>Precio Unitario</th>
                            <th>Precio Total</th>
                        </tr>
                    </thead>
                    <tbody>
                    {carrito.map((prod,i)=>(
                        <tr key={i}>
                            <td>{prod.prod_nombre}</td>
                            <td></td>
                            <td>{prod.prod_precio}</td>
                            <td></td>
                            
                        </tr>
                    ))}
                </tbody>
                </table>

               
        </div>
    )
}