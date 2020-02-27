class Ksiazka {
    constructor(tytul,autor,przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }

    opiszKsiazke() {
        let opis
        if (this.przeczytana == true) {
            opis = ('Książka ma tytuł ' + this.tytul + ', autorem jest ' + this.autor + ' i została przeczytana')
        }
        else {
            opis = ('Książka ma tytuł ' + this.tytul + ', autorem jest ' + this.autor + ' i nie została przeczytana')
        }
        return opis
    }
}

let wiedzmin = new Ksiazka('Wiedźmin', 'Andrzej Sapkowski', false)
let dresden = new Ksiazka('Akta Harrego Dresdena', 'Jim Butcher', true)
let carbon = new Ksiazka('Altered carbon', 'Richard Morgan', false)

let bibiloteczka = [wiedzmin,dresden,carbon]

function iloscPrzeczytanych() {
    let liczbaPrzeczytanych = 0;
    bibiloteczka.forEach(function(element) {
        if(element.przeczytana == true) {
            liczbaPrzeczytanych +=1;
        }
        console.log(element.opiszKsiazke());
    });
    console.log('Ilość przeczytanych książek: ' + liczbaPrzeczytanych);
}

iloscPrzeczytanych(bibiloteczka);

// Napisz klasę "Ksiazka", która ma właściwości "tytul", "autor", "przeczytana" (przeczytana jest typu Boolean) oraz jedną metodę "opiszKsiazke", która zwraca stringa opisującego tą książkę wg. wzoru "Książka ma tytuł Wiedźmin, autorem jest Andrzej Sapkowski i została przeczytana.".
// Stwórz 3 instancje obiektu tej klasy z czego jedna z książek ma być już przeczytana, a następnie stwórz nową tablicę globalną i dodaj do niej te 3 książki.
// Następnie napisz funkcję "iloscPrzeczytanych", która jako parametr przyjmuje tablicę obiektów (naszych książek, ktore stworzyliśmy), a zwraca nam ilość książek, ktore zostały przeczytane. Podczas iteracji po tablicy (wewnątrz tej funkcji) i sprawdzania, czy książka jest przeczytana, wywołuj także na obiekcie metodę opiszKsiazke(), a wynik jej działania wyświetlaj w konsoli.
// Na samym końcu wyświetl w konsoli ilość przeczytanych książek
