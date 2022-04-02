import {useState,createContext} from "react"

export const CarritoContext = createContext()

const CarritoContextProvider = (props) =>{

    const [carrito,setCarrito] = useState([])

    const anadirACarrito = (producto) =>{
        setCarrito([...carrito, producto])
    }

    return(
        <CarritoContextProvider value={{carrito,anadirACarrito}}>
                    {props.children}
        </CarritoContextProvider>
    )

}

export default CarritoContextProvider