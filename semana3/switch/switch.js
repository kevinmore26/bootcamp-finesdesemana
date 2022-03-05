let producto = +prompt("Ingrese el código del producto, ej.1")


switch (producto){
    case 1:
        console.log("papitas");
        break;
    case 2:
        console.log("chocman");
    case 3:
        console.log("tacos");
        break;
    case 4:
        console.log("chocosoda");
        break;
    default :
    console.log("no hay")
}


let numAlumnos = 50;
let precioFinal = 0;

switch(true){
    case (numAlumnos >= 100):
        precioFinal = numAlumnos * 60 ;
        console.log(precioFinal)
    break;
    case (numAlumnos < 100 && numAlumnos >= 50):
        precioFinal= numAlumnos * 70;
        console.log(precioFinal)
    break;
    case (numAlumnos < 50 && numAlumnos >= 30):
        precioFinal= numAlumnos * 90;
        console.log(precioFinal)
    break;

    default:
        console.log("cueste 4000")


}
