function mostrar()
{ var contador=0;
  var num;
  var negativos=0;
  var positivos=0;
  var poscont=0;
  var negcont=0;
  var parcont=0;
  var cercont=0;
  var respuesta;

	//declarar contadores y variables

	while(respuesta != true)
	{
    do{
      num = prompt("Ingrese un número");
      num = parseInt(num);
    }while(isNaN(num));

    if(num % 2 == 0 && num !=0)
    {
      parcont++;
    }
    else if(num == 0){
      cercont++;
    }
    else if(num < 0){
      negativos+=num;
      negcont++;
    }
    else if(num > 0){
      positivos+=num;
      poscont++;
    }
    }


    respuesta = confirm("¿Desea finalizar?");

    document.write("La cantidad de pares son : " + parcont);

}




 //FIN DE LA FUNCIÓN
