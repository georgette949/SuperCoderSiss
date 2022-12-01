//EJ 1: Crear función que reciba como parámetros dos números y que devuelva la suma de ellos
/*function suma (num1, num2){
    return num1 + num2;
}

function sumar_dos_numeros(a, b){
    let suma = a + b;
    console.log(suma)
    return suma;
}
sumar_dos_numeros(4, 5)

//EJ 2. OPCIÓN 1: Crear función que determine si un número es par o impar
function identificar_par (num1){
    if (num1 % 2 == 0){
        console.log("El número es par");
    }
    else{
        console.log("El número es impar");
    }
}
identificar_par(3)

//EJ 2. OPCIÓN 2

function determinar(){
    let numero = prompt("Escribe un número");

    if(numero % 2 == 0){
        alert("El número " + numero + " es par");
    }else{
        alert("El número " + numero + " es impar");
}
    return numero;
}
determinar();

//EJ 3: Crear un objeto carro haciendo la abstracción de sus atributos y un objeto anidado
let carro = {
    marca: "Volkswagen",
    puertas: 2,
    caracteristicas:{
        color: "blue",
        size: "small",
        asientos: 4
    }
};
console.log(carro);
console.log(carro.caracteristicas.color);

//EJ 4: Crear una función que devuelva la marca del carro
function marca(){
    console.log(carro.marca);
 }
marca();

 //EJ 5: Crear una función que devuelva la cantidad de puertas que tiene el carro
 function puertas(){
    console.log(carro.puertas);
 }
puertas();

 //EJ 6: Crear una función que devuelva un atributo del objeto anidado
function caracteristicas(){
    console.log("color:" + carro.caracteristicas.color);
}
caracteristicas()

//EJ 7: Crear un array de 10 números

let numeros=[1,2,3,4,5,6,7,8,9,10];

//EJ 8: Crear una función que imprima en consola todos los números de un array 

function mostrarNum(){
    for (var i = 0; i <= 9; i++){
        console.log(numeros[i]);
    }
}
mostrarNum();

//EJ 9 OPCIÓN 1: Crear una función que elimine los números pares de ese array
function borrarPares(){
    for (var i = 0; i <= 9; i++) {
       if (numeros[i] % 2 == 0){

       } else {
          console.log(numeros[i]);
       }
       }
    }
    borrarPares();

 //EJ 9 OPCIÓN 2
    let array = [1,2,3,4,5,6,7,8,9,10];
    let pares = [];
    let impares = [];
    for(let i= 0;i<array.length;i++){
        if(i % 2 ==0){
            pares.push(array[i]);
        }
        else{
            impares.push(array[i]);
        }
        } 
console.log(pares);*/

//EJ 10: Crear una función que devuelva el número mayor de un array

//EJ 11: Crear una función que devuelva el número menos de un array

//EJ 12: Crear un función que convierta en minúsculas todas las letras de un texto

//EJ 13: Crear una función que convierta en mayúsculas todas las letras de un texto

//EJ 14: Crear una función que reciba un array de nombres y que convierta la primera letra de cada nombre en mayúscula
/*
let array = [
    {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    },
    {
    "id": 2,
    "name": "Morty Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    },
    {
    "id": 3,
    "name": "Summer Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Female",
    },
    {
    "id": 4,
    "name": "Beth Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Female",
    },
    {
    "id": 5,
    "name": "Jerry Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    },
    {
    "id": 6,
    "name": "Abadango Cluster Princess",
    "status": "Alive",
    "species": "Alien",
    "type": "",
    "gender": "Female",
    },
    {
    "id": 7,
    "name": "Abradolf Lincler",
    "status": "unknown",
    "species": "Human",
    "type": "Genetic experiment",
    "gender": "Male",
    },
    {
    "id": 8,
    "name": "Adjudicator Rick",
    "status": "Dead",
    "species": "Human",
    "type": "",
    "gender": "Male",
    },
    {
    "id": 9,
    "name": "Agency Director",
    "status": "Dead",
    "species": "Human",
    "type": "",
    "gender": "Male",
    },
    {
    "id": 10,
    "name": "Alan Rails",
    "status": "Dead",
    "species": "Human",
    "type": "Superhuman (Ghost trains summoner)",
    "gender": "Male",
    }
    ]
 */
//EJ 15: Crear un array de 10 nombres

    let miArrayNombres = ["Meena", "Natalia", "Mónica", "Diana", "Gabi", "Sharon", "Tania", "Ana", "Iris", "Manu"];

//EJ 16: Crear una función que imprima en pantalla una lista con los nombres del array de nombres

    function imprimir_nombres(miArrayNombres){
        for(let contador =0; contador<=9; contador++){
            console.log(miArrayNombres[contador]);
        }
    }
    imprimir_nombres(miArrayNombres)

//EJ 17: Crear un array de números

let numeros=[1,2,3,4,5,6,7,8,9,10];

//EJ 18: Crear una función que pinte en pantalla cuántos números tiene el array de números

function imprimirLenght (length){
    console.log(numeros);
}
imprimirLenght(numeros);

//EJ 19: Crea los nodos necesarios para imprimir un formulario.