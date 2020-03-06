// Zaimplementuj funkcję, która przyjmuje 2 argumenty. Pierwszy parametr to string, a drugi to litera.
// Funkcja liczy i zwraca ilość wystąpień litery w stringu.
// Funkcję wywołaj z parametrami:
// 1. Szkoła Programowania Akademia 108
// 2. a
// Wynik działania funkcji wyświetl w konsoli.

function literaWStringu (string, litera) {
    let text = string.split('')
    let ilosc = 0
    text.forEach (element => {
        if (element === litera) {
            ilosc += 1
        }
    })
    return ilosc
}

let wynik = literaWStringu('Szkoła Programowania Akademia 108', 'a')
console.log('Liczba liter w stringu: ', wynik)