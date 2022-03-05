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