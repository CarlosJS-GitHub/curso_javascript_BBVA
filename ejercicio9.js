/*
Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por 
mayúsculas, sólo por minúsculas o por una mezcla de ambas
*/
var texto ='pepe';
function tipo_letra(cadena){
    var mayus=false;
    var minus=false;
    for (var i=0;i<cadena.length;++i){
        if (cadena[i]==cadena[i].toUpperCase()) {
            mayus=true;
        } else if (cadena[i]==cadena[i].toLowerCase()) {
            minus =  true;
        }
       
        console.log('i: ' + i + ' texto[i]; ' + cadena[i] + ' '+ mayus+minus);
    }
    console.log(mayus);
    console.log(minus);

    return mayus && minus ? 'Mezcla': (mayus ? 'Mayuscula':'Minuscula');
}
console.log(tipo_letra(texto));
