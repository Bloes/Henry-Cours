class Usuario{
    constructor(nombre,email,edad){
        this.nombre = nombre;
        this.email = email;
        this.edad = edad;
        

    }
    info(){
        console.log("[Usuario común]");
        console.log("Nombre:" + this.nombre);
        console.log("Email: " + this.email);
        console.log("Edad:" + this.edad);
        }}
class Administrador extends Usuario{
        constructor(nombre,email,edad,rol){
        super(nombre,email,edad);
        this.rol = rol;
        }
        info(){
        console.log("[Usuario Administrador]");
        console.log("Nombre:" + this.nombre);
        console.log("Email: " + this.email);
        console.log("Edad:" + this.edad);
}}

usuario = new Usuario("Juan", "kenaa@example.com", 20);
adm = new Administrador("Brayan", "breaa@example.com", 28);
usuario.info();
adm.info();
