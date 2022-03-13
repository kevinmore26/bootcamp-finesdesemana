/* 
1.obtener los objetos element del DOM y referenciarlos.
2. obtener el value del input y agregarlo a un arreglo 
3. Mostrar las tareas en el UL
*/

let formTarea = document.getElementById("formTarea")

let ulPendiente = document.getElementById("pendientes")

let arregloPendientes = []
let arregloCompletado = []

formTarea.addEventListener("submit",(evento)=>{
    evento.preventDefault()
    //para hacer referencia a un input que esté dentro de un formulario 
    //nombreVariableForm = ["name_input"].value

    let nuevaTarea = formTarea["tarea"].value
    arregloPendientes.push(nuevaTarea)

    console.log(arregloPendientes)

    formTarea.reset()
    //va a aplicar a todos los inputs dentro del formulario
    dibujarPendientes()
})


let dibujarPendientes = () =>{
    //limpiar antes de dibujar
    ulPendiente.innerHTML = ""
    
    arregloPendientes.forEach((item,i)=>{
        //crear el elemento li 
        let li = document.createElement("li")
        //le agrego el texto de item
        li.innerHTML = item
        ulPendiente.appendChild(li)
         
        li.addEventListener("dblclick",()=>{
            arregloCompletado.push(arregloPendientes[i])
        })
        
    })
}

