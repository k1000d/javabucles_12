/*Escribe un programa que pregunte
 al usuario su edad. Mostrar en pantalla 
 “Feliz cumpleaños” repetido 
 tantas veces como años tenga.*/


let edad= parseInt(window.prompt('Escribe tu edad'));


/*

for (i = 0; i < edad; i++) {
console.log ('Feliz cumpleaños');
}


let i = 0;
do  {
 console.log ('Felicidades')
 i++;
} while (i < edad) ;
*/



let a = 0;
while (a < edad) {
    console.log ('Feliz cumpleaños');
    a++;
}
