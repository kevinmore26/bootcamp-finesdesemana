let persona ={
    //propiedad:valor,
    nombre:"Juanito",
    apellidos:"Alcachofa",
    edad:30,
    conduce:true,
    habilidades:["cocinar","guitarra","tocar-violin"]
}

persona.nombre = "Juanito alimaña"
persona.edad = 26
console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.habilidades[2])

//--------------------------------------

let albumMusica = {
    nombre  : "Voicenotes",
    artista :"Charlie Puth",
    discografia:"x records",
    anio : "2018",
    canciones : [
        {
            titulo:"The way I am",
            duracion:3.00,
            escritores:["charlie puth","pepito"]
        },
        {
            titulo:"Attention",
            duracion:3.30,
            escritores:["charlie puth","juanito"]
        }
    ]
}

console.log(albumMusica.canciones[0].escritores[1])

let perrito = {
    nombre :"pegasus",
    edad : 5,
    color : "blanco",
    habitos : ["ladrar","dormir","escarbar"],

    //método, simplemente es una función asociada a una propiedad
    ladrar :function(){
        console.log("wof wof wof")
    }
}

perrito.ladrar()
perrito.color="plomo"
console.log(perrito.color)

delete perrito.edad //elimina una propiedad
console.log(perrito.edad)

//crear un arreglo de objetos, donde cada objeto represente a una peli, con los siguientes campos, 
//nombrePelicula:string, anio:number,director:string,genero:string