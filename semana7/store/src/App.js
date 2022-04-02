import { BrowserRouter , Routes ,Route} from "react-router-dom"
//import  Rutas from "./Rutas"
import PortadaView from './views/PortadaView'
import ProductoView from './views/ProductoView'
import NavTop from './components/NavTop'
export default function App(){

  

  return(
      <div>
        {/* este BrowserRouter vendría ser el react-router-dom */}
          <BrowserRouter>
          <NavTop/>
            {/* el Routes va verificar qué ruta necesitamos y que componente usar */}
              <Routes>  
                  <Route exact path="/"  element={<PortadaView/>}  /> 
                  <Route exact path="/detalle/:id"  element={<ProductoView/>}  />   
              </Routes>
          </BrowserRouter>
      </div>
  )
}