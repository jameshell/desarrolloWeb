/*function Persona(nombre,apellido,edad){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
}

Persona.prototype.saludar= function(){
	console.log(`Saludos de ${this.nombre} ${this.apellido} `);
}
*/
class PersonaClase {
	constructor(nombre,apellido,edad){
   		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;		
	}
	saludar(){
 	console.log(`Saludos de ${this.nombre} ${this.apellido} `);		
	}
}

class Estudiante extends PersonaClase{
	constructor(nombre,apellido,edad,carrera){
		super(nombre,apellido,edad);
		this.carrera = carrera;
	}
	saludar(){
		console.log(`Hola soy ${this.nombre} y estudio ${this.carrera}`);	
	}
}

let personaObj = new Estudiante("Jaime","Alonso", 24, 'Ingeniería de Sistemas');
personaObj.saludar();

import myImport from 'app3.js';    

myImport.mensajes("Hola mundo"); // function that is being imported




