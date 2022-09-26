/*
Ejercicios de Funciones de cálculo de facturas

1.  Crea una función llamada calculaTotalLinea a la cual se le pasen dos parámetros llamados importe 
y unidades, deberá de devolver el total de multiplicar ambas cantidades
2.  Llama a la función calculaTotalLínea pasándole como parámetros 2 y 5 almacena el resultado en 
una variable llamada línea1
3.  Llama a la función calculaTotalLínea pasándole como parámetros 4 y 7 almacena el resultado en 
una variable llamada línea2
4.  Declara una variable de tipo Array llamada lineas
5.  Mete las dos variables linea1 y linea2 en el array lineas
6.  Crea una función llamada calculaBaseImponible que sea capaz de sumar todas números almacenados 
en un array y devolver el resultado
7.  Llama a la función calculaBaseImponible pasándole como parámetro el array lineas, almacena el 
resultado en una variable llamada baseImponible
8.  Crea un función calculaIVA que calcule el IVA de la factura, para ello le meteremos dos parámetros:
 el primero será la base imponible y el segundo el % de IVA a calcular, devolverá el resultado de la 
 fórmula: r=b*X%IVA donde X es el segundo parámetro, b es la base imponible y r es el resultado de 
 la cuenta. Ejemplo si la base imponible es 100 y el IVA es del 21% el resultado deberá ser 21
9.  Llama a la función calculaIVA pasándole como parámetro la variable baseImponible y 21 como % de IVA, almacena el resultado en una variable llamada totalFactura
10. Crea una función calcula IRPF que calcule la retención de IRPF, se le pasarán dos parámetros, 
 primero es la baseImponible y el segundo es el % de retención, devolverá el resultado de la 
 siguiente fórmula: -r=b*X%IRFP r es el resultado final, X es el % de IRPF y b es la base imponible.
 Por ejemplo si la base imponible es 100 y el % de IRPF es el 15 el resultado será -15
11. Llama a la función calculaIRPF pasándole como parámetros la variable baseImponible y 15 como % 
de IRPF almacena el valor en la variable retencion
12. Para calcular el precio total de la factura a pagar es necesario realizar la siguiente cuenta: totalFactura=baseimponible+IVA-IRPF. Ejemplo baseImponible  100, IVA 21% e IRPF 15% = 100+21-15=106. Para ello crearemos una función llamada calculaTotalFactura a la que se le pasan los tres parámetros, base imponible, la cantidad de IVA y la cantidad de retención. Devolverá el valor del total a pagar de la factura
13. Llama a la función calculaTotalFactura pasándole las variables baseImponible, totalIVA y totalIRFP, almacena el valor que devuelve la función en una variable llamada totalARecibir


Pista: Para calcular algo en función a un porcentaje se utiliza el siguiente cálculo, por ejemplo para calcula el IVA del 21 con una base de 100 sería 100*0,21=21
*/

function calculaTotalLinea(importe, unidades) {
    return importe * unidades;
}

function calculaTotalLinea(x, y) {
    return x * y;
}
var a, b;

var linea1 = calculaTotalLinea(a = 2, b = 5);
console.log("linea1: " + linea1);
var linea2 = calculaTotalLinea(a = 4, b= 7);
console.log("linea2: " + linea2);

var lineas = [];
lineas.push(linea1);
lineas.push(linea2);
console.log("lineas: " + lineas);

function calculaBaseImponible(array) {
    var suma = 0;
    for (var i in array) {
        suma += array[i];
    }
    return suma;
}

var baseImponible = calculaBaseImponible(lineas);
console.log("baseImponible: " + baseImponible);

function calculaIVA(base_imponible, porcentaje) {
    return (base_imponible * porcentaje)/100;
}

var totalFactura = calculaIVA(base_imponible=baseImponible, porcentaje=21);
console.log("totalFactura: " + totalFactura);

/*
12. Para calcular el precio total de la factura a pagar es necesario realizar la siguiente cuenta: 
totalFactura=baseimponible+IVA-IRPF. Ejemplo baseImponible  100, IVA 21% e IRPF 15% = 100+21-15=106. 
Para ello crearemos una función llamada calculaTotalFactura a la que se le pasan los tres parámetros, 
base imponible, la cantidad de IVA y la cantidad de retención. Devolverá el valor del total a pagar de
 la factura
13. Llama a la función calculaTotalFactura pasándole las variables baseImponible, totalIVA y totalIRFP, 
almacena el valor que devuelve la función en una variable llamada totalARecibir

Pista: Para calcular algo en función a un porcentaje se utiliza el siguiente cálculo, por ejemplo para calcula el IVA del 21 con una base de 100 sería 100*0,21=21
*/
function calculaIRPF(base_imponible, porcentaje) {
    return (base_imponible * porcentaje)/100;
}

var retencion = calculaIRPF(baseimponible=baseImponible, porcentaje=15);
console.log("retencion: " + retencion);

function calculaTotalFactura(baseimponible, porcentajeIVA, porcentajeIRPF) {
    return base_imponible + calculaIVA(baseimponible, porcentajeIVA) - calculaIRPF(base_imponible, porcentajeIRPF);
}
var totalIVA = 21;
var totalIRFP = 15;
var totalARecibir = calculaTotalFactura(base_imponible, totalIVA , totalIRFP);
console.log("totalARecibir: " + totalARecibir);
