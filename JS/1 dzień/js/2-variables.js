'use strict'

// stare (js5)
// var 

// nowe (js6)
// let - zmienna, którą można nadpisywać
// const - zmiennna, której się nie nadpisuje


let name;
let ladyName = "Kaja";
let age = 37;
// naspisanie zmiennej, już bez let bo by swtorzył nową zmienną
age = 35;

let color = "czerwony";

name = "Sergio";
console.log("przed nadpisaniem", name);
name= ladyName;


console.log(name);
console.log(color);
console.log(age);




function wyswietlZmienna() {
    let name = 180;
    console.log(name);
}