/*Escribe un programa que muestre el número entero positivo 
que el usuario introduzca pero al revés (si introduce 1478 que muestre 8741), 
hasta que el usuario introduzca 0. Si introduce 0 la primera vez, 
debería mostrarlo al revés (es decir, mostrar 0) y acabar el programa.*/



//declaramos la variable num y no le damos ningun valor
​
let num;
​
//declaramos la variable numInvertido y le damos el valor de un string vacio ("")
let numInvertido = "";
​
//en el bucle do va a entrar la primera vez. Y seguirá entrando en el mientras
//la condición de su while (el de abajo del todo) sea true
//es decir, mientras num  no sea igual a "0"
do {
  //igualamos la variable num a lo que nos introduzca el usuario
  num = window.prompt("escribe una cifra");
  //declaramos la variable x y le damos el valor de num.length (o la largura del string que contiene num)
  let x = num.length;
  //en el bucle while se repetirá mientras x sea mayor o igual a 0
  while (x >= 0) {
    //igualamos el valor de numInvertido a la suma entre numInvertido + el substring entre x-1 y x (cada vuelta del while)
    numInvertido = numInvertido + num.substring(x - 1, x);
​
    //a x le restamos 1 (cada vuelta del while)
    x--;
  }
  //sacamos en consola la variable numInvertido
  console.log(numInvertido);
  //reseteamos numInvertido (le damos el valor original) para que no se sumen el resto de numeros que introduzca el usuario
  numInvertido = "";
} while (num !== "0");

