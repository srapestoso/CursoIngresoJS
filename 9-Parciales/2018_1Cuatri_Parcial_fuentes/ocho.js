function mostrar()
{
var letra;
var numero;
var contcero=0;
var conpar=0;
var conimp=0;
var positivos=0;
var acupos=0;
var negativos;
var acuneg=0;
var maxletra;
var minletra;
var maxnum = -100;
var minnum = 100;
var respuesta = "si";

    while(respuesta =="si"){

        letra = prompt("Ingrese alguna letra");
            while( !isNaN(letra)){
                letra = prompt("No ingreso una letra, reingrese");
            }
        numero = parseInt(prompt("Ingrese un numero entre -100 y 100"));
            while (isNaN(numero) || numero < -100 || numero > 100){
                numero = parseInt(prompt("No ingreso un numero entre -100 y 100, reingrese"));
            }
        
                if ( numero == 0){
                    contcero++;
                }
                else if ( numero % 2 == 0){
                    conpar++;
                }
                else{
                    conimp++;
                }
            if (numero > 0){
                acupos = acupos + numero;
                positivos++;
            }
            else if ( numero < 0){
                acuneg = acuneg + numero;
            }

            if (numero >= maxnum){
                maxnum = numero;
                maxletra = letra;
            }
            if (numero <= minnum){
                minnum = numero;
                minletra = letra;
            }

        
    respuesta = prompt("¿Desea continuar ?");
    }
document.write("La cantidad de pares es igual " + conpar + "<br>");
document.write("La cantidad de impares es igual " + conimp+ "<br>");
document.write("La cantidad de ceros es igual " + contcero + "<br>");
document.write("El promedio de los positivos ingresados" + acupos/positivos+ "<br>");
document.write("La suma de los numeros negativos " + acuneg+ "<br>");
document.write("El numero maximo " + maxnum + " La letra max " + maxletra + " El valor minimo " + minnum + " La letra min " + minletra);
}
/*
Realizar el algoritmo que permita iterar el ingreso de dos datos, 
una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar 
al terminar el ingreso por document.write: 
a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.
*/