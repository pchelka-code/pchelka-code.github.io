'use strict'

// funkcja mnożenia
function multiply (param1, param2, param3) {

    let result;

    result = param1 * param2 *param3;

    return result;
}

let multiplyResult = multiply(3, 9, 10);
let drugieDzialanie = multiply(2, 9, 10)

console.log("Wynik: ", multiplyResult);
console.log("Wynik: ", drugieDzialanie);


// to samo ale dodawanie
function summ (param1, param2, param3) {

    let wynik;
    wynik = param1 + param2 + param3;
    return wynik;
}

let summWynik = summ(3, 9, 10);
let drugieDodawanie = summ(2, 3, 12)

console.log("Wynik: ", summWynik);
console.log("Wynik: ", drugieDodawanie);


// można krócej bez parametrów ale przypisuje na sztywno, trzeba jakoś pobrać wartości (jutro omówimy)
function dodawanie2 () {
    let wynik
    wynik = 2 * 2
    return wynik
}

// funkcja anonimowa, inaczej się wywołuje
let functionExpression = function () {
    let wynik
    wynik = 2 * 2
    return wynik
}

// wywołanie funkcji
functionExpression()

console.log(functionExpression());

// zapis funkcji strzałkowej, jest o ms szybsza
let arrowFuncion = () => {
    return 'Jestem w funkcji';
}

console.log(arrowFuncion());


// funkcja strzałkowa z działaniem
let arrowFuncion2 = (param1, param2, param3, kolejnyparam) => {
    let wynik = param3 + param1 * param2 /kolejnyparam
    return wynik;
}

// funkcja strzałkowa z działaniem, skrócony zapis ale mniej wygodny
let arrowFuncion3 = (param1, param2, param3, kolejnyparam) => {
    return param3 + param1 * param2 /kolejnyparam
}

let wynikArrowFunction = arrowFuncion3(2,2,4,0)
console.log(wynikArrowFunction);