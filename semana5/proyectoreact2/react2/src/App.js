import "./App.css"
import imagenLogo from "./logo.svg"

//components
import Header from './components/header/index'

// CUANDO TU DEFINAS EL NOMBRE DE LA VARIABLE DE TU FUNCIÓN EN REACT SIEMPRE DEBE ESTAR EN MAYUSCULAS

//siempre se pone la extensión cuando no es JS
const App = () =>{



    //todo el html que quedramos poner se pone dentro del return y lo que está afuera es del js
   
  return(
    //SOLO DEBE HABER UN CONTENEDOR 
     <div>
       <Header></Header>
       <Header/>
          <h1>HOLA MUNDO EN REACT</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ex, veniam eveniet repudiandae necessitatibus provident officia corrupti facere nostrum nulla. Debitis officiis quibusdam, veniam facilis culpa nobis repudiandae! Alias, quidem?
          </p>
          <div>
              <img src={imagenLogo} alt=""></img>
          </div>
          
          
     </div>
     
     
  )
}

export default App;


