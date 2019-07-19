function mostrar()
{

	var contador=0;
	var acumulador=0;
  var respuesta='si';
  var num;

  do{

    num = prompt("Ingrese valores numericos");

    while (isNaN(num)){
    num = prompt("Dato invalido, reingrese valor numerico")
    }

    num = parseInt(num);

    acumulador = num + acumulador;

    contador++;

  respuesta =prompt("¿Desea finalizar?").toLocaleLowerCase;
  }while (respuesta != "si");


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
