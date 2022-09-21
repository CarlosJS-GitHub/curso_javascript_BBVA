/*
A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios", 2];

Determinar cual de los dos número es mayor
Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores 
necesarios para obtener un resultado true y otro resultado false
Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos 
numéricos
*/

var valores = [true, 5, false, "hola", "adios", 2];
var max = -99999
for (var i in valores) {
    console.log('indice: ' + i + ' valores: ' + valores[i] + ' tipo: ' + typeof valores[i]);
    if (typeof valores[i] == 'number') {
        if (max < valores[i]) {
            max = valores[i];
        }
    } 
}

console.log('max: ' + max);