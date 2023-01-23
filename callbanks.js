var devuelvoUsuario = function(){
    return 'Brayan';
}
var devuelvoSaludo = function(){
    return 'Hola';
}
var saludo = function(cb1,cb2){
    return cb1() + ' ' + cb2();
}
var resultado = saludo(devuelvoSaludo, devuelvoUsuario);
console.log(resultado);
/************************************************************* */

var devuelvoFrase = function(comida){
    return 'Hoy quiero comer: ' + comida;
}
var hablar = function(comida,cb){
    return cb(comida);
}
var fraseFinal = hablar('Salchipapa', devuelvoFrase);
console.log(fraseFinal);

