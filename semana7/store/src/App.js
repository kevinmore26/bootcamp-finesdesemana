import { BrowserRouter , Routes ,Route} from "react-router-dom"
//import  Rutas from "./Rutas"
import PortadaView from './views/PortadaView'
import ProductoView from './views/ProductoView'
import NavTop from './components/NavTop'
import CarritoContextProvider from "./context/carritoContext"
import CarritoView from "./views/CarritoView"
import Prueba from "./components/Prueba"
import { AuthContextProvider } from "./context/authContext";
import LoginView from './views/LoginView'

export default function App(){

  return(
      <div>
        {/* este BrowserRouter vendría ser el react-router-dom */}
          <BrowserRouter>
          <AuthContextProvider>
          <CarritoContextProvider>
            <NavTop/>
              {/* el Routes va verificar qué ruta necesitamos y que componente usar */}
                <Routes>  
                  <Route exact path="/"  element={<PortadaView/>}  /> 
                  <Route exact path="/prueba"  element={<Prueba/>}  /> 
                  <Route exact path="/detalle/:id"  element={<ProductoView/>}  />   
                  <Route exact path="/carrito"  element={<CarritoView/>}  /> 
                  <Route exact path="/login"  element={<LoginView/>}  /> 
                  
                </Routes>
              </CarritoContextProvider>
            </AuthContextProvider>
          </BrowserRouter>
      </div>
  )
}