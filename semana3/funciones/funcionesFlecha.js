//paremetros por defecto

function restar(num1,num2){
    return num1 - num2
}

console.log(restar(10,2))


setTimeout(function(){
    console.log("booom!")
},3000)

//funciones flecha
let despedirse = (texto) =>{
        return `Adiós, ${texto}` 
}