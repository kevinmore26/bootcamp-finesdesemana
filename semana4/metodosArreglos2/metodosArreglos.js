let nombres = ["juan","maria","diana","gaby","pepito"]

//forEach
// la funcion dentro del forEach, va a recibir
//item , indice , arreglo

nombres.forEach(function(nom, i , arreglo){
    console.log(` ${i} - ${nom} - ${arreglo}` )
})

//map
//va a transformar los elementos de un arreglo pero lo vamos a retornar a otra variable, y esta otra variable almacena los elementos  
let numeros = [100,200,300,400]

let cuenta = numeros.map((monto,indice,array)=>{
    return ` Cuenta ${indice} - ${monto + 120}` 
})

console.log(cuenta)

//filter
let peliculasBuenas = peliculas.filter((peli)=>{
        return peli.vote_average > 5
})

console.table(peliculasBuenas)

//IndexOf
//Busca un elemento en mi arreglo y si existe retorna su posiciónm en el caso de que no existir me devuelve un -1

let posicion = nombres.indexOf("diana")
console.log(posicion)


//splice
//sirve para eliminar X cantidad de elementos
//pide 2 parametros : posicion y cantidad de elementos
//prueba.splice(1,1)

nombres.splice(1,1)
console.log(nombres)


