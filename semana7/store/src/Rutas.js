import {Route} from 'react-router-dom'

import PortadaView from './views/PortadaView'

export default function Rutas(){
    return(
        <div>
            <Route path="/" exact component  element={<PortadaView/>}  />   

        </div>
    )
}