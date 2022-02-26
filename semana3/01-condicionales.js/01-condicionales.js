let edad = 19 ;


//   if (evaluo_una_sentencia){
//          Si es verdad, se ejecuta esto
//   }else{
//            si no es verdad, por defecto se ejecuta esto otro
//    }

if(edad < 18){
    console.log("no, eres menor de edad, estás chiquito, no puedes votar")
}else{
    console.log("ok, eres mayor, sí puedes votar")
}

//50 === 50
// tipo de dato y el contenido
// else -- es para todos los casos sobrantes
//50 == "50"
//son iguales

let edad2 = 70;

if (edad2 >= 65){
    console.log("te toca bono para personas longevas")
}else if(edad2 == 50 ){
    console.log ("como tienes 50, te damos un reloj")
}else if(edad2 >= 17 ){
    console.log("te toca bono para personas jovenes")
}else{
    console.log("el valor no es correcto")
}

//  || significa "O"
// && significa "y"
let chanchito = +prompt("Ingrese lo ahorrado")

if(chanchito > 599 ){
    console.log("puedes comprarte un playstation4")
}else if (chanchito >= 200){
    console.log("puedes comprar un smartwatch")
}else if (chanchito == 149 || chanchito == 159){
    console.log("puedes comprar estos objetos en específico")
}else{
    console.log("puedes comprarte estos productos genéricos")
}

// año bisiesto
// 1. si es que es divisible entre 4 , que su residuo sea 0 ,es bisiesto

// 2. si es que es divisible entre 100, y tiene residuo 0 , NO ES BISIESTO

//3. SI ES QUE EL AÑO ES DIVISBLE ENTRE 400 Y TIENE RESIDUO 0, ES bISIESTO

// "!" significa es diferente que

let anio  = 1700;

if((anio % 4 == 0 && anio % 100 !=0) || anio % 400 == 0 ){
    console.log("Es bisiesto")
}
else{
    console.log("nahh, no es bisiesto")
}



//TAREA 
// UNA SASTRERÍA TIENE UNA PROMOCIÓN, A TODOS LOS TRAJES QUE CUESTEN MÁS DE QUE 800$ SE APLICARÁ UN DESCUENTO DE 15, EN CASO DE SER MENOR QUE 800$ , SOLAMENTE TENDRÁ UN DESCUENTO DEL 8%.
//CREE EL CÓDIGO NECESARIO PARA PREGUNTAR AL CLIENTE CUÁNTO ES EL PRECIO ORIGINAL DEL TRAJE QUE QUIEREN, SEGÚN ESO CALCULAR EL PRECIO FINAL
//USAR PROMPT, IF, ELSE