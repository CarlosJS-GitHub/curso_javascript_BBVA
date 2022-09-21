/*
1. Crea un nuevo html con código JS dentro
2. Crea un array de 10 posiciones
3. Recorre ese array con todos los tipos de bucle
4. Haz lo mismo con un array de 20 posiciones
5. haz un algoritmo que sea capaz de saber por una edad dada, si puedes 
conducir o no, votar o beber alcohol
6. dependiendo del número de errores que es una variable numérica, 
decir que si es uno, diga que no lo ha hecho mal. si es dos, 
que puede pasar, si es "Black" que diga el número de consejeros 
de bankia, y si no es ninguno de los anteriores suspéndelo!
7. crea un bucle que de 10 vueltas y se salga a la tercera
8, crea un bucle que de 10 vueltas pero que tenga alzehimer
 y se olvide de la mitad de ellas
*/

var lista = ['a','b','c','d','e','f','g','h','i','j'];

console.log('>>>>>> Array con 10 elementos <<<<<<');
console.log('>>> bucle for <<<');
for (var i=0; i<lista.length;++i) {
    console.log('indice: ' + i + ' lista: ' + lista[i] + ' tipo: ' + typeof lista[i]);
}
console.log('>>> bucle for in <<<');
for (var i in lista) {
    console.log('indice: ' + i + ' lista: ' + lista[i] + ' tipo: ' + typeof lista[i]);
}
console.log('>>> bucle while <<<');
var i=0;
while (i<lista.length) {
    console.log('indice: ' + i + ' lista: ' + lista[i] + ' tipo: ' + typeof lista[i]);
    ++i;
}

var lista2 = ['a1','b1','c1','d1','e1','f1','g1','h1','i1','j1',
              'a2','b2','c2','d2','e2','f2','g2','h2','i2','j2'
];

console.log('>>>>>> Array con 20 elementos <<<<<<');
console.log('>>> bucle for <<<');
for (var i=0; i<lista2.length;++i) {
    console.log('indice: ' + i + ' lista: ' + lista2[i] + ' tipo: ' + typeof lista2[i]);
}
console.log('>>> bucle for in <<<');
for (var i in lista2) {
    console.log('indice: ' + i + ' lista: ' + lista2[i] + ' tipo: ' + typeof lista2[i]);
}
console.log('>>> bucle while <<<');
var i=0;
while (i<lista2.length) {
    console.log('indice: ' + i + ' lista: ' + lista2[i] + ' tipo: ' + typeof lista2[i]);
    ++i;
}

var edad=15;

if(edad >= 18) {
    console.log('si puedes conducir, votar o beber alcohol');
} else {
    console.log('no puedes conducir, votar o beber alcohol');
}

var num_error = '0';
switch (num_error) {
    case '1':
      console.log('no lo ha hecho mal');
      break;
    case '2':
      console.log('Pasa');
      break;
    case 'Black':
      console.log('20 consejores tiene bankia');
      break;    
    default:
      console.log('Suspenso!!!');
  }

console.log('>>> salir a la tercera <<<');
var i=0;
while (i<lista.length) {   
    if (i == 2) {        
        console.log('>>> me salgo a la 3 vuelta: '+ i +' <<<');
        i = lista.length;
    } else {
        ++i;
    }
}

console.log('>>> bucle con alzehimer <<<');
var i=0;
while (i<lista.length) {   
    if (i == lista.length/2) {
        console.log('>>> me salgo a la mitad: '+ i +' <<<');
        i = lista.length;
    } else {
        ++i;
    }
}
