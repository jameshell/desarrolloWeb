function divisionNumeros(num1,num2){
	return new Promise(function(resolve, reject){
    	if(num2==0){
    		reject(new Error("División por cero"));
    	} else {
    		resolve({resultado:num1/num2,mensaje:"Ok"});
    	}
	});
}

let num1 = prompt("Digite numero 1:");
let num2 = prompt("Digite numero 2:");

divisionNumeros(num1,num2)
	.then(function({resultado,mensaje}){
    document.getElementById('resultado').innerHTML=resultado;
    document.getElementById('mensaje').innerHTML=mensaje;
    
	})
	.catch(function(error){
		document.getElementById("error").innerHTML= error;
	});