let peliculas = [
    {
      nombrePelicula:"Blade Runner",
      anio:1982,
      director:"Ridley Scott",
      genero:"Ciencia Ficción"
    },

    {
      nombrePelicula:"Parasite",
      anio:2019,
      director:"Bong Joon-ho",
      genero:"Drama"
    },
    {
      nombrePelicula:"El Padrino",
      anio:1972,
      director:"Francis Ford Coppola",
      genero:"Drama"
    }
  ]

//juntar propiedades como el nombre, director, anio, genero de las peliculas y mostrarlas juntas.

for(let i=0; i < peliculas.length ; i++ ){
    console.log(`La pelicula ${peliculas[i].nombrePelicula} del año ${peliculas[i].anio} del director ${peliculas[i].director}`)

}

let arrJuego = [
    {
        nombre:"halo",
        precio:10
    },
    {
        nombre:"civilaztion",
        precio:30
    },
    {
        nombre:"juego1",
        precio:15
    },
    {
        nombre:"juego4",
        precio:55
    },
]

//1.preguntar el presupuesto

let presupuesto = +prompt("Cuánto deseas gastar?")
let juegosComprados = []

//2.filtro cuales podría comprar

let revisarPresupuesto = () =>{
    let juegosComprables = []
    for(let i=0; i<arrJuego.length;i++){
        if(presupuesto >= arrJuego[i].precio){
            juegosComprables.push(arrJuego[i])
            console.log(juegosComprables)
        }
    }
    return juegosComprables

}

let agregarACarrito = (listaJuegos) =>{
    for(let i=0; i<listaJuegos.length;i++){
        if(presupuesto < listaJuegos[i].precio){
            console.log(`Se descarta ${listaJuegos[i].nombre}`)
            continue;
        }

        let compra = confirm(`Deseas comprar ${listaJuegos[i].nombre} cuesta S/ ${listaJuegos[i].precio}`);
        if (compra=== true){
            juegosComprados.push(listaJuegos[i])
            presupuesto -= listaJuegos[i].precio
        }

    }
}

let listaComprables = revisarPresupuesto()
console.log("con ese monto puedes acceder a estos juegos")
console.table(listaComprables)
agregarACarrito(listaComprables)
console.table(juegosComprados)
console.log(`Tu vuelto es ${presupuesto}`)