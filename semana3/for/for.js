//for(contador; condicional; actualizacion){
//    codigo que va repetirse X veces
//}

let nombres = ["pepito","juanito","josesito","lalito"]

for(let i=0; i< nombres.length; i++ ){
    console.log(i + " " + nombres[i])
}


//USO DEL BREAK

let carta = ["ceviche","cuy","tacos","secoCarne","arepa"]

let eleccion = +prompt(` Indique la opción deseada:
                        0. Ceviche
                        1. cuy
                        2. tacos
                        3. secoCarne
                        4. arepa` )

for (let i=0; i < carta.length; i++){
    if(eleccion === i){
        console.log(`ud a elegido ${carta[i]}`)

        break; //cortamos
    }
    
    console.log(`me he ejecutado ${i} veces`)
}                        

