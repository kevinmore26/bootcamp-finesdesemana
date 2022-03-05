let miBoton = document.getElementById("boton")
let divCOntenido = document.getElementById("contenido")

//element.addEvenListener("evento",function)

miBoton.addEventListener("click",()=>{
    alert("Me haz hecho click , OMG :O!!")
})

//let caja = document.createElement("div")
//caja.style.width ="400px"

miBoton.addEventListener("mouseover",()=>{
    console.log("Paso por encima")
})