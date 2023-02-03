//Primera parte:
//Crear una función con tres parámetros que sean números que se suman entre sí.
//Llamar a la función en el main y darle valores.

function suma(a, b, c) {
    return a + b + c;
}
console.log(suma(2, 3, 4));



//Segunda parte:
//Crear una clase coche.
//Dentro de la clase coche, una variable numérica que almacene el número de puertas que tiene.
//Una función que incremente el número de puertas que tiene el coche.
//Crear un objeto miCoche en el main y añadirle una puerta.
//Mostrar el número de puertas que tiene el objeto.

class  Coche {
    constructor(numPuertas) {
        this.numPuertas = numPuertas;
    }}
micoche = new Coche(4);
console.log(micoche.numPuertas);
/*----------------------------------------------------------------------------------------------*/

var estacion = "verano";
if (estacion === "verano"){
    console.log("Estacion verano");
}
else if (estacion === "primavera"){
    console.log("Estacion primavera");
}
else{
    console.log("Estacion invierno");
    
}

var contador = 10;
while(contador > 0){
    console.log('Esto vale contador: ' + contador);

    contador = contador - 1;

}

var contador1 = 10;
do{
    console.log(contador1);
    contador1 = contador1 - 1;
    
}while(contador1 > 0);




