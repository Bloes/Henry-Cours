class Personas{
    constructor(edad,nombre,telefono){
        this.edad = edad;
        this.nombre = nombre;
        this.telefono = telefono;
        
    }
}
class Cliente extends Personas{
    constructor(edad,nombre,telefono,credito){
        super(edad,nombre,telefono);
        this.credito = credito;
    }
}
class Trabajador extends Personas{
    constructor(edad,nombre,telefono,credito,salario){
        super(edad,nombre,telefono,credito);
        this.salario = salario;
    }
}    
    
Cliente = new Cliente(28,"Brayan Jesus",3046702708,35.50)
Trabajador = new Trabajador(28,"Brayan Jesus",306702708,35.50,20000000);
console.log(Trabajador);
console.log(Cliente);
    
    
    





