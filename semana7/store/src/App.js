import { BrowserRouter , Routes ,Route} from "react-router-dom"
//import  Rutas from "./Rutas"
import PortadaView from './views/PortadaView'
export default function App(){

  

  return(
      <div>
        {/* este router vendría ser el react-router-dom */}
          <BrowserRouter>
            {/* el switch va verificar qué ruta necesitamos y que componente usar */}
              <Routes>  
              <Route exact path="/"  element={<PortadaView/>}  />   
              </Routes>
          </BrowserRouter>
      </div>
  )
}