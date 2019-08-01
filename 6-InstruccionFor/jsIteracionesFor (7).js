function mostrar()
{
var num;
var cont;
do{
  num=promp("Ingrese un numero");
  num=parseInt(num);
}while(isNaN(num));
for(var i = 1; i < num;i++ ){

if (num %i == 0){
  cont++;
  alert("La cantidad de números encontrados es"+cont);
}
}
}//FIN DE LA FUNCIÓN
