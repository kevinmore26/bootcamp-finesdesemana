// para utilizar await tengo que utilizarlo dentro de un bloque que sea de asuc

const usarData = async() =>{
    try{
      //intenta ejecutar este bloque de codigo
      // equivalente al .then 
      let rpta = await traerData()
    }catch(err){
      //si hay errores captura ese error
      
    }
}