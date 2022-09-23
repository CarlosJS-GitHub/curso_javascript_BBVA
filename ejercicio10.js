/*
Definir una función que determine si la cadena de texto que se le pasa como parámetro es un 
palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha.
Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural"
*/
var texto ='La ruta nos aporto otro paso natural';
function es_palindromo(cadena) {
    console.log('cadena              : ' + cadena); 
    var cadena2 = cadena.toLowerCase();
    console.log('cadena2  toLowerCase: ' + cadena2);   
    cadena2 = cadena2.replaceAll(' ','');
    console.log('cadena2  replaceAll : ' + cadena2);    
    cadena2 = cadena2.split('');
    console.log('cadena2  split      : ' + cadena2);
    cadena2 = cadena2.reverse();
    console.log('cadena2  reverse    : ' + cadena2);
    cadena2 = cadena2.join('');
    console.log('cadena2  join       : ' + cadena2);
    var cadena3 = cadena.replaceAll(' ','').toLowerCase().split('').reverse().join('');
    console.log('cadena3    todo     : ' + cadena3);
    var cadena1 = cadena.toLowerCase().replaceAll(' ','');
    console.log('cadena1             : ' + cadena1);
      
    if (cadena1 == cadena3) {  
        return 'SI Palindromo';
    }  else {  
        return 'NO Palindromo';
    }  
}  
console.log(es_palindromo(texto));