let usuario1 = {nombre:"Luis"};
let usuario2 = {nombre:"Carlos"};
/*
COMO SE USABAN ANTES LOS MAPS...
let objetomap = {};
objetomap[usuario1.nombre] = 5;
objetomap[usuario2.nomnbre] = 52;
console.log(objetomap[usuario1.nombre]);
console.log(objetomap[usuario2.nombre]);
console.log(Object.keys(objetomap)); */

let objetomap2 = new Map();
objetomap2.set(usuario1, 5);
objetomap2.set(usuario2, 52);


let user = {};
let objetomap3 = new WeakMap();
objetomap3.set(usuario1, 5);
objetomap3.set(usuario2, 52);
// ------------------------------------------------
let tags = [];
tags.push("ES 2015");
tags.push("ES 2015")
tags.push("Desarrollo Web :V");
tags.push("OMFG LMAO LOL KHE");
console.log(tags.length); // Retorna normalmente el numero contando hasta los valores que son iguales.

/* SETS NORMALES
let tagsSet = new Set();
tagsSet.add('HTML'); //Los 2 html solo cuentan como uno.
tagsSet.add('HTML');
tagsSet.add('CSS');
tagsSet.add('RUBY');
console.log(tagsSet.size);

for(let infoValor of tagsSet){
	console.log(infoValor);
}
let [first, ...restElement] = tagsSet;
console.log(first);
*/
let tagsSet = new WeakSet();
let objeto = {nombre:"HTML"};
tagsSet.add(objeto); //Los 2 html solo cuentan como uno.
//tagsSet.add('HTML');
//tagsSet.add('CSS');
//agsSet.add('RUBY');
console.log(tagsSet.size);
console.log(tagsSet.has(objeto));

//for(let [key,value] of objetomap2){
//console.log(`${key.nombre}:${value}`);
//} IMPRIMENDO MAPA...
console.log(objetomap3.get(usuario1));
console.log(objetomap3.get(usuario2));

