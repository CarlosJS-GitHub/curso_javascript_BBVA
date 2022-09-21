/*
Crear un array llamado meses y que almacene el nombre de los doce meses del año. 
Mostrar por pantalla los doce nombres utilizando la función console.log()
*/
var mes = ['enero','febrero','marzo', 'abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
for (var i in mes) {
    console.log('indice: ' + i + ' mes: ' + mes[i]);
}