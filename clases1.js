function crearClasepersona(){
    class Persona {
        constructor(nombre,edad,hobbies,amigos){
            this.nombre = nombre;
            this.edad = edad;
            this.hobbies = hobbies;
            this.amigos = amigos;
        }
        addFriend(nombre,edad){
            this.amigos.push({nombre:nombre,edad:edad});
            }
            addHobby(hobby){
                this.hobbies.push(hobby);
        }
        getFriends(){
            return this.amigos.map((amigo) => amigo.nombre);
        }
        getHobbies(){
            return this.hobbies;
        }
        getPromedioEdad(){
            return this.amigos.reduce((acumulador, amigo) => acumulador + amigo.edad, 0)/this.amigos.lengeth; 
        }
};
return persona;
}