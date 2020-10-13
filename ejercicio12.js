/*Escribe un programa que pida un número de 3 dígitos y
 muestre el resultado de sumar sus dígitos.*/
/*

 let string = parseInt(window.prompt('Escribe un numero de tres digitos'));
 let num1 = string.substring(1);
 let num2 = string.substring(1, 2);
 let num3 = string.substring(2, 3);

 let suma = 0;
     suma = (suma + num1 + num2 + num3);
     console.log (suma);
 */
let suma = 0;
let string = (window.prompt('Escribe un numero de tres digitos'));
let num1 = parseInt (string.substring(0,2));
let num2 = parseInt (string.substring(2,3));
let num3 = parseInt (string.substring(3,4));

 
suma = suma (num1*num2*num3);     
 
console.log(suma); 
//por resolver 