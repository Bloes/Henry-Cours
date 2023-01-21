class personas{
    constructor(nombre, edad){
    
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log('\nMi nombre es: ' + this.nombre, '\nMi edad es: ' + this.edad);
    }}
class programador extends personas{
    constructor(nombre, edad, añosdeExperiencia){
        super(nombre, edad);
        this.añosdeExperiencia = añosdeExperiencia;
    }
    codear(){
        console.log('soy ' + this.nombre + ' Codeo desde hace ' +  this.añosdeExperiencia + ' años');

}}
var brayan = new personas('Brayan', 27);
var progr = new programador('Daniela', 23, 5);

brayan.saludar();
progr.codear();
progr.saludar();




