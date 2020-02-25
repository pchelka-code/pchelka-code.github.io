// function sortowanie(param1) {
//     let text = param1.split('')
//     let text2 = text.sort()
//     let text3 = text2.join('')
//     return text3
// }

// let wynik = sortowanie('Akademia108');
// console.log('Wynik', wynik)

//wersja skórocna
function sortowanie(param1) {
    let text = param1.split('').sort().join('')
    return text
}

let wynik = sortowanie('Akademia108');
console.log('Wynik funkcji:', wynik)