var deportes = {conBalon : ['futbol','basket','volleyball'],
 sinBalon : ['boxeo','surf','trumpet']};

var datos = {nombre : 'Juana', edad : 22, sexo : 'M', estudios : {programador: true}}  /*En este objeto esta dentro de otro objeto*/
//Acceder 
console.log(datos.nombre);
//Asignar 
datos.nombre = 'Daniela'
console.log(datos.nombre);
//Crear 
autos = {};
autos.marca = ['a+', 'a-', 'b+', 'b-', 'c+', 'c-'];
console.log(autos.marca);
//Borrar 
delete autos.marca;
console.log(autos);

var misFunciones = {saludar: function(){
    console.log('Hola Mundo');
    
}};

misFunciones.saludar();

/***************************************************************************** */

var atuendos = {manos: ['guantes', 'anillos'], pies:['zapatos']};    //DOT NOTATION

atuendos['piernas'] = ['jeans', 'pantalon'];    //BRACKET NOTATION

var comidas = {};
var diferenciaNotaciones = function(prpuno, prpdos){         //Se utiliza con BRACKET NOTATION
    comidas[prpuno] = ['frutas', 'vegetales'];
    comidas[prpdos] = ['Salchipapa', 'pizza'];
};
diferenciaNotaciones('Saludable', 'Nosaludable');
console.log(comidas);

/********************************************************************************* */

var libro = {autor:'Gabo', genero:'Ficción', edicion: 2015};
var tienePropiedades = libro.hasOwnProperty('año');          //.hasOwnProperty() nos ayuda a verificar si un objeto tiene propiedades
console.log(tienePropiedades);

var todasLasPropiedades = Object.keys(libro);           //.keys() nos ayuda a recorrer el objeto
console.log(todasLasPropiedades);

var mundo = {continentes: 7, paises: 195, oceanos: 5}
for (var prop in mundo){                                      //for in sirve para recorrer el objeto
    console.log('Esta es la propiedad: ' + prop);
    console.log('El valor de esta propiedad es: ' + mundo[prop]);
};

/****************************************************************************************** */

var mascota = {
    animal: 'mamifero',
    raza: 'siberiano',
    edad: 20,
    peso: 100,
    amistoso: true,
    info: function(){
        console.log('\n Es de raza\n' , this.raza);
        
}}
mascota.info(); 





    






