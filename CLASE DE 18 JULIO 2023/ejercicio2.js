//PUNTO2
let texto = prompt ("ingrese el texto")
let conteo = 0

for(let i=0; i<texto.length; i++ ){
    let letra = texto[i].toLowerCase();
    if(letra === "a"|| letra === "e"|| letra === "i"|| letra === "o"|| letra === "u"){
        conteo++
    }
}

console.log(" la cantidad de vocales en el texto son : " +conteo)


