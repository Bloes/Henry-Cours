Array.prototype.mayoresQuetres = function () {
    var arregloModificado = [];
    for (let i = 0; i < this.length; i++) {
    if (this[i] > 3){
        arregloModificado.push(false);
        
    }
    else {
        arregloModificado.push([i]);
    }

    }
    return arregloModificado;
}
var arreglo = [1,2,3,4];
var nuevoArreglo = arreglo.mayoresQuetres();
console.log(nuevoArreglo);
/***************************************************************** */

class Latinoamerica{
    constructor(){
        this.paises=[];
    }   
}
Latinoamerica.prototype.agregarpais=function(pais){
    this.paises.push(pais);
};

var continente = new Latinoamerica();
continente.agregarpais('Colombia');
console.log(continente.paises);



