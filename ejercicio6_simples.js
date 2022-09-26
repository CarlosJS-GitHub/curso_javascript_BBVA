/*
Realiza los siguientes ejercicios dentro del proyecto que estabas haciendo hasta ahora, incluye los ficheros y carpetas que sean necesarios para cumplir con los siguientes requisitos:

Define una función que sea capaz de imprimir un valor por consola. la función se llamará imprimeConsola, 
no admite ningún parámetro de entrada ni de salida. Decide tú que quieres imprimir por consola.
Llama a la función y comprueba que funciona adecuadamente
Define una función llamada sumaCadenas, que sea capaz de concatenar dos cadenas de caracteres, que 
serán los argumentos que tenga la función como entrada y que devuelva el valor de dicha concatenación.
Llama a la función y comprueba que funciona adecuadamente
Define una función llamada creaArray que sea capaz de crear e inicializar un array de 10 posiciones cuyo 
valor de cada una de dichas posiciones sea 0, devuelve el array creado.
Llama a la función y comprueba que funciona correctamente.
Define una nueva función llamada creaArrayv2 que sea capaz de crear e inicializar un array de 10 
posiciones cuyo valor de cada una de ellas sea el valor que reciba como parámetro de entrada de la 
función, devolverá el array generado.
Llama a la función y comprueba que funciona adecuadamente.
Define una nueva función llamada creaArrayv3 que sea capaz de crear e inicializar un array del mismo 
número de posiciones como el parámetro de entrada que recibirá la función, poniendo como valor inicial a 
todos los elementos del array como otro parámetro de entrada que indique el valor inicial, devolverá el 
array creado.
Llama a la función y comprueba que funciona adecuadamente
Crea una función llamada imprimeArray que sea capaz de imprimir por pantalla el contenido de un array, 
indicando por cada elemento del array, su posición y el valor guardado en dicha posición. La función 
recibirá como parámetro el array a imprimir por pantalla.
Llama a la función y comprueba que funciona adecuadamente.
*/

function imprimeConsola() {
    console.log("Decide tú que quieres imprimir por consola");
}

imprimeConsola();

function sumaCadenas(cadena1, cadena2) {
    return cadena1 + cadena2;
}
console.log("sumaCadenas" + sumaCadenas("hola", " Don pepito"));

function creaArray() {
    var out = new Array(10);
    for (var i = 0; i < 10; i++) {
        out[i] = 0;
    }
    return out;
}
console.log("creaArray: " + creaArray());

function creaArrayv2(valor) {
    var out = creaArray();
    for (var i in out) {
        out[i] = valor;
    }
    return out;
}
console.log("creaArrayv2: " + creaArrayv2('N/A'));

function creaArrayv3(long, valor) {
    var out = new Array(long);
    for (var i = 0; i < long; i++) {
        out[i] = valor;
    }
    return out;
}
console.log("creaArrayv3: " + creaArrayv3(3,'A'));

function imprimeArray(array) {
    for (var i in array) {
        console.log('i : ' + i + ' varlor: ' + array[i]);
    }
}

imprimeArray(creaArrayv3(3,'A'));