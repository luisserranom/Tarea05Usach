let notas = [6,8,9,2,5,10];


function suma(notas){
    let sumaNotas = 0
    for(let i= 0; i < notas.length; i++){
    sumaNotas += notas[i]; 
    }
    return sumaNotas;
}

console.log(suma(notas));
let sumaNotaFinal = suma(notas);

function promedio(sumaNotaFinal){
    return sumaNotaFinal/notas.length
}

let promedioFinal = promedio(sumaNotaFinal);
console.log(promedioFinal);



 