var listaDecompras = [];
listaDecompras[3] = 'Tomates';
listaDecompras[1] = 'Lechuga';
console.log(listaDecompras.length);

//******************************************** */

var elementoDeArray = listaDecompras[1];
console.log(elementoDeArray);

var letras = ['b', 'c', 'g', 'j','w'];
console.log(letras);
console.log(letras.length); 

/*********************************************** */

var palabra = 'Henri';
var palabraSeparada = palabra.split('');
palabraSeparada.pop();
palabraSeparada.push('y');
console.log(palabraSeparada);
var palabraSeparada = palabraSeparada.join('');
console.log(palabraSeparada);

var numeros = [1,2,3,4];
numeros.forEach((num) => console.log(num));
numeros.forEach((num) => {
    if (num === 3){
        console.log(num);
    }

});

/************************************************** */
var masUno = numeros.map((num) => {
    return num + 1;
});
console.log(masUno);
/*************************************************** */
//PUSH Y UNSHIFT AÑADIR
var colores = ['Amarrillo', 'Azul'];
colores.push('Rojo');
colores.unshift('Verde')
console.log(colores);

//POP Y SHIFT QUITAR
colores.shift();
colores.pop();
console.log(colores);

//INCLUDES INCLUIR
var numeros = [1,2,3,4];
var numero5 = numeros.includes(5);
console.log(numero5);

//EVERY CUMPLE CONDICION
var numeros = [1,2,3,52];
var cumpleCondicion = numeros.every((num) => { num > 5 });
console.log(cumpleCondicion);

//SPLIT SEPARAR 
var palabra = 'Henri';
var palabraSeparada = palabra.split('');
console.log(palabraSeparada);

//JOIN ARREGLAR 
var palabraArreglada = palabraArreglada.join('');
console.log(palabraArreglada);

//FOREACH RECORRER
var numeros = [1,2,3];
numeros.forEach((num) => { console.log(num)});

//MAP
var numeros = [1,5,6];
numeros.map((num) => { return num + 1});
console.log(masUno); 



