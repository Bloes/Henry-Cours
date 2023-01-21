//FUNCION CONSTRUCTORA 
function Auto(puertas, color, marca, año, ruedas){            //Para declarar una clase se comienza por Mayuscula
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
    this.informacion = function(){                              //Agregar Metodos en una clase 
        console.log('Este es un ' + this.marca + ' de color ' + this.color); 
    }                                                        
}

var miPrimerA = new Auto(2, "rojo", "Ford", 2023,2);       //Creacion del objeto 
console.log(miPrimerA);
console.log(miPrimerA.marca);
miPrimerA.informacion(); 

/********************************************************************************* */
//EXPRESION DE CLASES 

class Auto2{
    constructor(puertas, color, marca, año, ruedas){
        this.puertas = puertas;
        this.color = color;
        this.marca = marca;
        this.año = año;
        this.ruedas = ruedas;
        
}
informacion(){
    console.log('Este es un ' + this.marca + ' de color ' + this.color); 
}
}

var miPrimerA2 = new Auto2(2, "rojo", "Toyota", 2023,4);       //Creacion del objeto 
console.log(miPrimerA2);
console.log(miPrimerA2.marca);
miPrimerA2.informacion();
/************************************************************************************** */

class futbol{
    constructor(jugador){
        this.jugador = jugador;
    }
    obtenerNombre(){
        console.log(this.jugador);
        
}
}
var colombia = new futbol('Falcao');
var argentina = new futbol('Messi');
colombia.obtenerNombre();
argentina.obtenerNombre();



