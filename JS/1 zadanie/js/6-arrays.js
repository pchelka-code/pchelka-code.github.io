'use strict';

// // tablica zawsze w kwadratowym nawiasie [], po , wpisujemy string, number, inne tablice itp.
// //taka szafa co nie ma pólek i szuflad
// let names = ['Monika', 'Krystian', 'Łukasz'];

// console.log(names[1]); //pokaże Krystian
// let [name1, name2, name3] = names;
// console.log(name3); // wyloguje Łukasz

// //można się pomylić, jesli już jest numer indexu to przypisaliśmy do niego nową wartość
// names[3] = 'Tania';
// names[2] = 'Ela';

// //doda do tablicy names nową wartość, doda jako ostatni element
// names.push('Geralt');
// names.push('Geralt');
// names.unshift('jestem pierwszy');

// console.log(names);

// names.shift();
// console.log('zmiana tablicy za pomocą shift()', names);
// names.pop();
// console.log('zmiana tablicy za pomocą pop()', names);

// //długość tablicy
// console.log(names.length);

// names.push("Kaja");

// //pętla, potrzebuje 3 parametrów, 1 od któtrego elementu literujemy; warunek do spełnienia; zmina przyjętego elementu -tu zostanie dodane 1
// //wada - będzie się wykonywać do smago końca
// for (let i = 0; i < 4 ; i++) {
//    console.log('pierwszy for', names[i] );
// }

// for (let i = 0; i <= names.length ; i++) {
//     console.log( names[i] );
//  }


// //for (let i = names.length-1; i >= 0 ; i--) {
// //    console.log(names[i]);
// //}


// //to samo ale 
// names.forEach(function (element, i) {
//    console.log('Element nr ' + i + ' = ' + element);
// });

// //inny zapis tego samego co wyżej
// names.forEach((Element, index)=> {
//     console.log('forEach', Element, index)
// });


// let tablica = ['jan', 'asia', ['nowak', 'kowalski']]

// tablica.forEach(item =>{
//     if (typeof items === 'object') {
//         items.forEach(item => {
//             console.log(item)
//         })
//     }
// })


// //join łączy dane, pod warunkiem że to są stringi albo number
// console.log( names.join(" - ") );


// //sortuje alfabetycznie, przy liczbach robi to niepoprawnie np. 1,200,40,5
// names.sort();


// //odwraca kolejność w tablicy
// names.reverse();

// console.log(names);



// // concat łączy 2 tablice, zwraca nową zmienną
// let menNames = ['Robert', 'Mariusz', 'Andrzej'];

// let namesCollection = menNames.concat(names);

// console.log(namesCollection);

// console.log("Podaje jaki index ma wskazana wartości", namesCollection.indexOf("Mariusz"));

// console.log("Sprawdza czy podana zminna jest tablicą ", Array.isArray(namesCollection)); //dodatek

// //wyciąga od 2(włącznie) do 5(wyłącznie) elementu, tworzy nową tablicę
// console.log(namesCollection.slice(2, 5)); //dodatek

// //dodaje nowe dane, ale nie nadpisuje tylko wpycha do środka na 2 i 3 miejsce
// namesCollection.splice(2, 3, "Julek", "Krzyś"); //dodatek

// console.log(namesCollection); //dodatek

// //zamienia tablicę w jeden długi string oddzielony przecinkami, działa tylko na tablicach, na obiektach nie
// console.log(namesCollection.toString()); //dodatek


// /**
//  * sortowanie liczb
//  */
// let num = [1, 200, 40, 5]
// console.log('sortowanie liczb przy użyciu wbudowanej funkcji sort()', num.sort())


// console.log('sortowanie liczb przy użyciu wbudowanej funkcji sort() oraz dodadkowej funkcji ', num.sort(function (a, b) {
//     return a - b
// }))

/* Filter i map */
//zwraca nową tablicę
let numbers = [1, 2, 3, 4];
let squares = numbers.map(function (elem) {
    return elem * elem;
});
console.log('po użyciu funkcji map()', squares);

let even = numbers.filter(function (elem) {
    return elem % 2 === 0;
});

console.log("po użyciu funkcji filtr()", even);
/**
 * funkcja some() sprawdza czy dany element wytępuje w tablicy
 * zwraca true lub false 
 */
function czyWiekszyNiz3(element) {
    return element > 3
}

function czyWiekszyNiz10(element) {
    return element > 10
}

console.log('sprawdzamy czy w tablicy numbers jest elemnt większy od 3 ', numbers.some(czyWiekszyNiz3))

console.log('sprawdzamy czy w tablicy numbers jest elemnt większy od 10 ', numbers.some(czyWiekszyNiz10))


/**
 * funkcja every() sprawdza czy każdy element tablicy spełnia warunek
 */
let wiekszeOd40 = (element) => element > 40

console.log('sprawdzamy czy w tablicy numbers wszytkie są  elemnt większy od 40 ',
    numbers.every(wiekszeOd40))
console.log('sprawdzamy czy w tablicy numbers wszytkie są  elemnt mniejsze od 5 ',
    numbers.every(element => element < 5))


// do zmian wyświetlania np. . i , zaleznie od kraju 'toLocaleString'
let kwota = 2.5553234
let euro = kwota.toLocaleString('de', {
    style: "currency",
    currency: "EUR",
    currencySign: "accounting"
})
console.log("TCL: euro", euro)

let dolar = kwota.toLocaleString('usd', {
    style: "currency",
    currency: "USD",
    currencySign: "accounting"
})
console.log("TCL: dolar", dolar)

let yen = kwota.toLocaleString('ja-JP', {
    style: 'currency',
    currency: 'JPY'
})
console.log("TCL: yen", yen)

let zloty = kwota.toLocaleString('pl', {
    style: 'currency',
    currency: 'PLN'
})
console.log("TCL: zloty", zloty)

let dwaMiejscaPoPrzecinku = kwota.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})
console.log("TCL: dwaMiejscaPoPrzecinku", dwaMiejscaPoPrzecinku)
let nowaLiczba = 2.0
let dwaMiejscaPoPrzecinkuInaczej = nowaLiczba.toLocaleString('de', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})
console.log("TCL: dwaMiejscaPoPrzecinku", dwaMiejscaPoPrzecinkuInaczej)