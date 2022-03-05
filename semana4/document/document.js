//document es un objeto que me a permitir modificar el DOM
//El DOM es una serie de nodos (objetos) creados al momento de interpretar el HTML, cada nodo sería una etiqueta HTML
//getElementById sirve para traer el id del HTML a tu .js


let titulo = document.getElementById('titulo')
//innerHTML, que es una prop, contiene el html de un elemento
titulo.innerHTML = "<h2> Nuevo título de mi app<h2>"

titulo.style.color ="red"
titulo.style.backgroundColor="blue"
titulo.style.padding="10px"

let cajitas = document.querySelectorAll(".cajita")

cajitas.forEach((caja)=>{
    caja.innerHTML="Contenido cajitas"
    caja.style.width ="200px"
    caja.style.height="200px"
})