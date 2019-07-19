function mostrar()
{

  var contador=0;
  var num;
  var max;
  var min;
  var a = true;
	// declarar variables

	var respuesta ='si';

	while(respuesta != true)
	{
		do{
      num = prompt("Ingrese un número");
      num = parseInt(num);
    }while (isNaN(num));
    if (a){
      a = false;
      max = num;
      min = num;
    }
    else{
    if (num > max){
      max = num;
    }
    else{
      min = num;
    }

    }
    respuesta = confirm("¿Desea finalizar?");

	}
    maximo.value = max
    minimo.value = min



}//FIN DE LA FUNCIÓN
