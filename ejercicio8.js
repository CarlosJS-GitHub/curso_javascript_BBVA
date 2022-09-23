/*
Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve 
como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla 
el resultado devuelto por la función
*/
var num = 3;
function Par_Impar(a) {
    return a%2==0 ? 'Par': 'Impar';
}
console.log('Numero: ' + num + ' es ' + Par_Impar(num));
;