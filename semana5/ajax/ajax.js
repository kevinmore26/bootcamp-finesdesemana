let btnGet = document.getElementById("btnGet");

btnGet.addEventListener("click", () => {
  //Este cartero, es el que se va a encargar de hacer peticiones

  let cartero = new XMLHttpRequest();

  //para saber  la situacion de nuestro cartero,en que anda nuestra carta

  cartero.addEventListener("readystatechange", () => {
    //cartero.readyState , es una propiedad que me dice cual es la situacion, como cuando hacemos un seguimiento y nos dice, si salió de destino, está en el avion, lo va hacer mediante números del 1 al 4 
    
    switch (cartero.readyState) {
    case 1:
        console.log("OPEN", cartero.readyState)
        break;
    case 2:
        //ponemos en el buzo
        console.log("SEND", cartero.readyState)
        break;
    case 3:
        //esperando, viajando
        console.log("DATA", cartero.readyState)
        break;
    case 4:
        //ya llego y recibí respuesta
            console.log("RPTA", cartero.readyState);
            let respuesta = cartero.responseText
            console.log(respuesta)
            break;
    }
  });
  cartero.open("GET","https://reqres.in/api/users?page=2")

  cartero.send(null)
});

//traemos info, con un get



