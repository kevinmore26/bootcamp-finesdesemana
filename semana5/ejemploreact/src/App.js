import {useState} from 'react'
import Footer from '../src/components/Footer'
import ListaTareas from './components/ListaTareas'

export default function App(){
  //const [ estado , funcDelEstado   ] = useState([])
  // el único que puede modificar al estado es la funcDelEstado
  const [tareas, setTareas] = useState(["pasear al perro"])
  const [texto,setTexto] = useState ("ordenar")

  const manejarTexto=(nuevoTexto)=>{
    setTexto(nuevoTexto)
  }
  const anadirTarea=()=>{
      setTareas([...tareas,texto])
  }
  
  


  const miTitulo = "Mi app"

  return(
      <div>
        <h1>{miTitulo}</h1>
          {/* <ul>
              {tareas.map((lista,indice)=>(
                <li key={indice}>{lista}</li>
              ))}
          </ul> */}

          <ListaTareas tareas={tareas}/>
          {/* representa el evento, */}
          {/* el target es un atributo del (e) , vendría ser el elemeto que recibió el evento */}
          <input type="text" value={texto} onChange={(e)=>{manejarTexto(e.target.value)}}/>
          <hr/>
          <button onClick={anadirTarea}>
            Anadir Tarea
          </button>
            <Footer mensaje={'Empresa1'}/>
            <Footer mensaje={'Empresa2'}/>

      </div>
      
  )
}
