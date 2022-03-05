let alumnos = ["alanCoronado","AlanMuñoz","daniel","judith","luis","miguel","pedro","tanya"]

let notas = [15,17,20,14,18,14,11,19]

//con un for vamos imprimir cada alumno con su respectica nota



//ejercicios
//utilizando el mismo arreglo alumno, hacer que el usuario ingrese un nombre, y si lo encuentra debe mostrar la posicion donde se encuentra el alumno, mostrar un mensaje de que no se encontró


let nombreBuscado = prompt ("Ingrese el nombre a buscar")

for (let i = 0; i < alumnos.length ; i++){
    if(nombreBuscado === alumnos[i]){
        console.log(`Se encontró a ${nombreBuscado} en la posicion ${i}`)
        break;
    }else{
        console.log("No se encontró :( ")
    }

}

//TAREAAAAAAAAAA
// PEDIR AL USUARIO UN AÑO DE INICIO Y UN AÑO FINAL ej(1490 y 1990) mostrar en la consola qué años entre ese rango son bisiestos