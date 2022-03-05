// ejercicios



// desarrollar una funcion que reciba 1 arreglo de nombres y 1 nombre, con esos datos buscar si el nombre recibido se encuentra dentro del arreglo, y si lo encuentra retornar la posicion, en caso de que no, retornar -1 o error



let encontrar = (arreglo, nombre) =>{
    for (let i=0; i < arreglo.length;i++){
        if ( arreglo[i] === nombre ){
            return i;
        }
    }
    return -1;
}

let existe = encontrar(["pepe","juanito","alcachofa"],"pepe")

console.log(`El nombre se encuentra en ${existe}`)