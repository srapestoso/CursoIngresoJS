function mostrar()
{

	var contador=0;
	var acumulador=0;
  var num;



  while ( contador < 5 ){


    num = prompt("Ingrese valor númerico");

    while ( isNaN(num) ){

    num = prompt("No ingreso un numero, usted es boludo?");

  }
    num = parseInt(num)

    acumulador = num + acumulador;

    contador++;


  }


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
