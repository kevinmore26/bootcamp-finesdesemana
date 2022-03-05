let divContenido = document.getElementById("contenido")
console.log(typeof divContenido)

divContenido.innerHTML= " <h1>HOla mundo </h1>"

let titulo = "Appstore"


// manejamos el contenido HTML de un objeto element como un string
divContenido.innerHTML = ` <header>
                                <h1> ${titulo} </h1>    
                             </header> ` 



 let titulo2= document.createElement("h2") 
 titulo2.innerHTML =" Segundo título"


 //es para añador al HTML
 divContenido.appendChild(titulo2)
 
 let imagen = document.createElement("img")

 imagen.setAttribute("src","imagen.png")

 divContenido.prepend(imagen)