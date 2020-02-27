// Zaimplementuj funkcję, która sortuje tablicę przez bąbelkowanie.
// Funkcja przyjmuje parametr - tj. tablicę do posortowania, a zwraca posortowaną talicę.
// Wywołaj funkcję z tablicą [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]. Wynik jej działania wyświetl w konsoli.
// Podpowiedź przed wysłaniem zadania do sprawdzenia:
// - znajdź w internecie opis działania sortowania bąbelkowego
// - zastosuj pętlę w pętli :)

// for while zewntrzna spradzająca boolean czy dokonano zmiany, wewnątrz for z if

let tablica = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

function babelkowanie (table) {
    let zmiana;
    do {
        zmiana = false;
        for (let i=0; i<table.length; i++) {
            if (table[i] > table[i+1]) {
                let odwrocenie = table[i+1];
                table[i+1] = table[i];
                table[i] = odwrocenie;
                zmiana = true;
            }
        }
    } while(zmiana == true);
    return table;
}

babelkowanie(tablica);
console.log(tablica);