'use strict'

let number = 10;  //zmienna globalna

function addNumber() {
    let number = 15;
    let newNumber = 20;
    console.log(number); //zmienna lokalna tylko wewnątrz funkcji
    console.log(newNumber); //zmienna lokalna tylko wewnątrz funkcji
}

addNumber();

console.log(number); //wyloguje zmienną globalną
console.log(newNumber); //błąd bo nie mamy dostępu do tej zmiennej