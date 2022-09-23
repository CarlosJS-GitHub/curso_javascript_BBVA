/*
Ejercicios previos ejercicio 6

1.  Crea un fichero html que tenga asociado un fichero externo Javascript
2.  Declara una función que devuelva el valor 2, la función se llamará devuelve2
3.  Ejecuta la función devuelve2 y lo que devuelva imprimelo por pantalla
4.  Declara una función que sea capaz de sumar dos números y devolver el resultado, la función 
se llama sumaDe2
5.  Llama a a función sumaDe2 con los número 1 y 3 e imprime el resultado por pantalla
6.  Declara una función que sea capaz de restar dos números y devolver el resultado la función 
se llama restaDe2
7.  Llama a a función restaDe2 con los número 1 y 3 e imprime el resultado por pantalla
Declara una función que sea capaz de multiplicar dos números y devolver el resultado la función 
se llama multiplica2
8.  Llama a a función multiplica2 con los número 1 y 3 e imprime el resultado por pantalla
9. Crea una función que devuelva un array con 7 posiciones vacías, la función se llamará creaArray
10. Llama a la función creaArray almacena el resultado en una variable llama miArray
11. Crea una función que sea capaz de inicializar a 0 (colocar el valor 0 en cada posición ) el array
 que acabas de inicializar con el nombre inicializarArray
12. Llama a la función inicializarArray con el array que tenías creado antes
13. Imprime por pantalla el array que has inicializado
14. Crea una función llamada sacaBola que elija un número aleatorio entre el número 1 y 50 y lo devuelva como resultado
15. Llama a la función sacaBola 5 veces
16. Mete los resultados de las llamadas a sacaBola en un array llamado numerosPrincipales
17. Crea una función llamada sacaOtraBola que elija un número aleatorio entre el número 1 y 11 y lo 
devuelva como resultado
18. Llama a la función sacaOtraBola dos veces
19. Mete los resultados de las llamadas a sacaOtraBola en un array llamado numerosEstrella
*/

function devuelve2() {
    return 2;    
}
function sumaDe2(a,b) {
    return a+b;    
}
function restaDe2(a,b) {
    return a-b;    
}
function multiplica2(a,b) {
    return a*b;    
}
function creaArray() {
    var array = [];
    var tamanio = 7;
    for (var i = 0; i < tamanio; i++) {
        array.push("");
     }
    return array;    
}
function inicializarArray(array) {
    var array_out = array;
    for (var i = 0; i < array_out.length; i++) {
        array_out[i]=0;
     }
    return array_out;    
}
function sacaBola() {    
    return Math.floor(Math.random() * 51);    
}
function sacaOtraBola() {    
    return Math.floor(Math.random() * 11);    
}

var a = 1;
var b = 3;
console.log('funcion devuelve2             : ' + devuelve2());
console.log('funcion sumaDe2 '+a+'+'+b+'   : ' + sumaDe2(a,b));
console.log('funcion restaDe2 '+a+'-'+b+'  : ' +  restaDe2(a,b));
console.log('funcion multiplica2'+a+'*'+b+': ' + multiplica2(1,3));
var miArray = creaArray();
console.log('funcion creaArray             : ' + miArray);
var miArray2 = inicializarArray(miArray);
console.log('funcion inicializarArray      : ' + miArray2);

for (var i=0;i<5;++i) {
    var bola = sacaBola();
    console.log('funcion sacaBola    '+i+'     : ' + bola);
}

console.log('>>> numerosPrincipales <<<');
var numerosPrincipales = [];
for (var i=0;i<5;++i) {
    numerosPrincipales[i] = sacaBola();
    console.log('i: '+i+' = ' + numerosPrincipales[i]);
}

console.log('>>> numerosEstrella <<<');
var numerosEstrella= [];
for (var i=0;i<2;++i) {
    numerosEstrella[i] = sacaOtraBola();
    console.log('i: '+i+' = ' + numerosEstrella[i]);
}