// Klient chce mieć aplikację służącą do obliczania wypłat.
// System wyświetla listę (załączony plik index.html),w którym znajdując się dane: pracownik, liczba przepracowanych godzin oraz stawka PLN za godzinę.

// Twoim zadaniem jest stworzenie skryptu, który będzie:
// - Liczył wypłatę dla każdego pracownika i wpisywał je dla każdego pracownika do pola span.wyplata
// Klient chce także, aby od razu doliczana była premia - jeżeli pracownik pracował powyżej 160 godzin, za każdą dodatkową godzinę otrzymuje podwójną stawkę.
// - Zaznaczał czerwonym tłem osoby, które przepracowały mniej niż 100 godzin
// Dodatkowo klient życzy sobie aby wyświetlała się lista trzech najlepszych pracowników - czyli takich, którzy przepracowali najwięcej godzin.

// Obliczanie jest odpalane przyciskiem button#oblicz

function wyplata() {
    let czas = document.getElementsByClassName('czas')
    let stawka = document.getElementsByClassName('stawka')
    let wyplata = document.getElementsByClassName('wyplata')
    for (let i=0; i<czas.length; i++) {
        if (czas[i].value > 160) {
            let pensja = (stawka[i].value*160)+((czas[i].value-160)*stawka[i].value*2);
            wyplata[i].innerHTML = pensja
        }
        else {
            let pensja = stawka[i].value * czas[i].value;
            wyplata[i].innerHTML = pensja
        }
        if (czas[i].value < 100) {
            czas[i].parentElement.style.backgroundColor = 'red';
        }
    }
};

document.getElementById('oblicz').addEventListener('click', wyplata)