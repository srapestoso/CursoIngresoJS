function mostrar()
{
  var a;
  var b;
  var r;

  a = prompt("Ingrese un valor");
  b = prompt("Ingrese otro valor");

  if (a == b){

    alert(a + b);
  }
  else if ( a > b ){
    r = a - b;
    alert(r);
  }
  else if ( a < b){
    a = parseInt(a);
    b = parseInt(b);
    r = a + b;
    if ( r > 10){
      alert("La suma es " + r + " y superó el 10");
    }
    else{
    alert(r);
    }
  }
}
