'use strict'

// Typ liczbowy

let salary = 5000;
let bonus = 2500;
let wholeSalary;

wholeSalary = salary + bonus;

console.log(wholeSalary);
console.log(typeof wholeSalary);
// typeof dodaj info jaki to typ danych


// Typ - łańcuch znaków - string
let salaryStr = "5000";
let bonusStr = "2500";
let wholeSalaryStr;

wholeSalaryStr = salaryStr + bonusStr;
console.log(wholeSalaryStr)


// Typ logiczny - boolean

let isSmog;
isSmog = false;
// jak nie ma podanej wartości to sprawdzi czy istnieje zmienna, to prawda

if (isSmog === false) {
    console.log("Jest SMOG");
} else {
    console.log("Nie ma SMOGa");
}

// Typ specjalne - undefined i null

let underfinderVarialbe;
let nullVariable = null;

console.log(underfinderVarialbe);
console.log(nullVariable);



// funkcja indexOf - znajdzie c i poda na którym miejscu jest w stringu (na drugim)
let studentsName = "Michał";
console.log(studentsName.indexOf('c'));

