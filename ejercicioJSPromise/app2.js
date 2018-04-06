let usuario = {
	nombre: "Juan",
	apellido: "Perez",
	edad: 15
};

usuario[Symbol.iterator] = function(){
	let contador = 0;
	let isDone = false;
	let propiedades = Object.keys(this);
	let next = ( )=>{
		if(contador>= propiedades.length){
			isDone = true;
		}
		return{done: isDone, value: this[propiedades[contador++]]};
	}
	return {next}
}

for(let i of usuario){
	let nodo = document.createTextNode(i);
	let elemento = document.createElement("p");
	elemento.appendChild(nodo);
	document.getElementsByTagName('body')[0].appendChild(elemento);
}
