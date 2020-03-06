// Zaimplementuj funkcję, przyjmuje jeden parametr - liczbę.
// Funkcja sprawdza, czy liczba jest liczbą parzystą, czy nie.
// Funkcja zwraca wynik swoich działań - wartość typu Boolean.

function parzysta (param1) {
    let wynik = ((param1 %= 2)==0)
    console.log(wynik)
    return wynik
}

let wynik = parzysta(13)

if (wynik == true) {
    console.log('Liczba jest parzysta')
}
else {
    console.log('Liczba jest nieparzysta')
}