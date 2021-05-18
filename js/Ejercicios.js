


// let numero1 = 15;
// let numero2 = 5;

// console.log (numero1+=numero2);







// let cadena1 = "chori";
// let cadena2 = "pan";
// let cadenaConcatenada= cadena1+cadena2

// console.log(cadenaConcatenada);







// let numeroUno = 2;
// let numeroDos = 4;

// if (numeroUno==numeroDos) {
//     console.log("Los numeros son iguales");
// }
// else{
//     console.log("Los numeros son distintos");
// }

// if (numeroUno>numeroDos) {
//     console.log("Numero1 es mayor que Numero2");
// }
// else{
//     console.log("Numero1 es menor que Numero2");
// }







// let variableNumerica = parseInt(prompt("Ingrese un numero"));
// switch (variableNumerica){
//     case 1:
//     case 2:
//     case 3:
//         alert ("Pertenece al grupo 1");
//         break;
//     case 4:
//     case 5:
//     case 6:
//         alert ("Pertenece al grupo 2");
//         break;
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//         alert ("Pertenece al grupo 3");
//         break;
//     default:
//         alert ("no pertenece a ningun grupo, ingrese un numero del 1 al 10");
// }






// for (let i = 0; i<10; i++){
//     console.log("El valor es: " + i)
// }

// let Valor1=parseInt(prompt("Ingrese un numero"));
// let Valor2=parseInt(prompt("Ingrese otro numero"));

// function sumaDeAmbos(Valor1, Valor2){
//     let resultado= Valor1 + Valor2;
//    alert("el resultado es "+ resultado);

// }






// sumaDeAmbos(Valor1, Valor2);

// let Cadena1="chori";
// let Cadena2="pan";

// function sumaDeCadenas(Cadena1, Cadena2){
//     let palabraCompuesta= Cadena1+Cadena2;
//    alert("la palabra compuesta es " + palabraCompuesta);

// }





// sumaDeCadenas(Cadena1, Cadena2);

// var cantidad= parseInt(prompt("Ingrese cantidad"));
// var precio_unitario= parseInt(prompt("Ingrese el precio unitario"));
// var precioParcial = cantidad * precio_unitario
// var descuento10 = precioParcial * 0.1;

// function cantidadYprecio(cantidad, precio_unitario){
//    var precioParcial = cantidad * precio_unitario;

// }
// console.log("el precio parcial es " + precioParcial);

// if (precioParcial>1000){
//      console.log ("El nuevo precio con descuento es " + parseInt(precioParcial - descuento10));
//     }

// else {
//          console.log ("El precio final es " + precioParcial);
//      }




 

// let numero = parseInt(prompt("Ingrese un numero"));
// let asteriscos = dibujarAsteriscos (numero);
// console.log (asteriscos);

// function dibujarAsteriscos(numero) {
//   let cadena = "";
//   for (var i = 0; i < numero; i++) {
//     cadena = cadena + "*";
//   }
//   return cadena;
// }




let arreglo = [1,2,3,4,5,6,7,8,9,10];
console.log(arreglo);

let arreglo2 = arreglo.map((valor => valor*valor));
console.log(arreglo2);