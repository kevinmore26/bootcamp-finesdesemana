function suma (num1,num2){
    let resultado = num1 + num2
    return resultado
}

console.log(suma(10,20))


//


function saludar (texto){
    console.log(`Hola, ${texto}`)
}

saludar("como estás")
saludar("amigos latinoamericanos")
saludar("qué planes para hoy?")


//

function multiplicacion (num3,num4){

    // nosotros cuando ponemos un return, la ejecución de mi función se corta.
    // como en el break
    return num3 * num4
    console.log("estoy después del return")
}

console.log(multiplicacion(10,72))


function esPar(numero){
    if(numero % 2 === 0 ){
        console.log("es verdadero")
        return true
       // console.log("es verdadero") NO VA APARECER
    }else{
        return false
    }
}

console.log(esPar(21))


//NOTA
// NO NECESARIAMENTE TIENEN QUE RETORNAN ALGO.
// PARA UTILIZAR LA FUNCIÓN DEBES LLAMARLO POR SU NOMBRE Y PARENTESIS
//EL CÓDIGO QUE ESTÁ DESPUÉS DEL RETURN NO SE EJECUTA, YA QUE EL RETURN FINALIZA LA EJECUCIÓN DE MI FUNCIÓN (COMO EL BREAK)