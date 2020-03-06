// Zaimplementuj funkcję, która przyjmuje 2 parametry. Pierwszy parametr, to podstawa, która będzie podnoszona do potęgi, a drugi to wykładnik.
// Funkcja podnosi podstawę do potęgi i zwraca wartość swoich obliczeń.
// Przy implementacji zadania nie używaj klasy Math.

function potega (param1, param2) {
    wynik = 1
    for(let i=param2; i>0; i--){
        wynik *= param1
    }
    return wynik
}

potega(3,5)
console.log ('Wynik potęgowania: ', wynik)