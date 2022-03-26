import { useState } from "react"
import Footer from "./components/footer/Footer"
import ListaTareas from "./components/ListaTareas"

export default function App(){
    //HOOK DE REACT (useState)
    //la funcDelEstado es el único que puede modificar al estado
    // const [estado, funcDelEstado] = useState([])
    // useState([]) => vendría a ser el estado inicial 
    //el estado es inmutable, el único que puede cambiarlo es la funcDelEstado
    const [tareas, setTareas] = useState(["pasear al perro"])
    const [texto, setTexto] = useState("ordenar")


    const anadirTarea  = ()=>{
      setTareas([...tareas,texto])
    }

    const manejarTexto = (nuevoTexto) =>{
      setTexto(nuevoTexto)
    }
    const miTitulo = "Mi App"



    return(
      <div >
        <h1>{miTitulo}</h1>
        {/* {tareas.map((tar,indice)=>(
          <li key={indice}>{tar}</li>
        ))} */}

        <ListaTareas tareas={tareas}/>
        <hr></hr>
        <input type="text" value={texto} onChange={(e)=>{
          manejarTexto(e.target.value)
        }}></input>
        <button onClick={anadirTarea}>
            Añadir tareas
        </button>
        <Footer  mensaje={"Empresa1"}/>
        <Footer  mensaje={"Empresa2"}/>

      </div>
    )

} 
