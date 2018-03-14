function cargarPerfiles(usuarios){
	if(usuarios.length>3){
		let mensajeSpin = "Esto tomara unos segundos";
		//Peticion AJAX
	} else {
		let mensajeFlash = "Se esta cargando la informacion";
	}
	for(let i in usuarios){
	peticionServidor("Prueba", usuarios[i],function(){
    console.log("Informacion de: "+usuarios[i]);
	});
}

	//console.log(mensajeSpin);
	//console.log(mensajeFlash);
}
cargarPerfiles(["Juan","Pedro","Luis"]);

function peticionServidor(url,nombre,callback){
console.log("Consulta "+nombre);
setTimeout(callback,2000);
}

function crearEtiquetas(item,... etiquetas){
	for(let i in etiquetas){
		console.log("Agregando etiqueta: "+ etiquetas[i]+" al "+item);
	}
}

function informacion(arg){
	if(arg==1){
		return {
			nombre: "Coca Cola",
			precio: 15000,
			etiqueta:["Nuevo","Promocion"]
		} else {
			return {
				nombre:"Postobon",
				precio: 1000,
				etiqueta:["Usado","Ultimo item","promocion"]
			}
		}
	}
}

function item(url, tiempoEspera){
this.url = url;
this.tiemEspera = tiempoEspera;
}

let item1= new item("/item/1",3000);
console.log(item1);
item1.solicitarinformacion();

item.prototype.solicitarinformacion = () {
	console.log(this.url);
	console.log(this.tiempoEspera);
};


crearEtiquetas("CocaCola","Nuevo", "Promocion");
crearEtiquetas("Usado", "Promocion","descuento","ultimo item");




