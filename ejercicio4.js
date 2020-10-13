/*Escribe un programa que pida 10 valores. 
Al final mostrar la media de esos valores.*/

let num1 = parseInt(window.prompt('escribe un nuemro'));
let num2 = parseInt(window.prompt('escribe un nuemro'));
let num3 = parseInt(window.prompt('escribe un nuemro'));
let num4 = parseInt(window.prompt('escribe un nuemro'));
let num5 = parseInt(window.prompt('escribe un nuemro'));
let num6 = parseInt(window.prompt('escribe un nuemro'));
let num7 = parseInt(window.prompt('escribe un nuemro'));
let num8 = parseInt(window.prompt('escribe un nuemro'));
let num9 = parseInt(window.prompt('escribe un nuemro'));
let num10 = parseInt(window.prompt('escribe un nuemro'));

let valores = (num1,num2,num3,num4,num5,num6,num7,num8,num9,num10);
let suma = 0;

for (let i=0; i<10; i++){

   suma = suma + valores;
   console.log (suma);
}
let media = console.log (valores/10)
/*
for (i=10; i>valor; i++ ) {
    valor = valor*10;
    window.prompt (valor);
    console.log(valor/i);
}
*/