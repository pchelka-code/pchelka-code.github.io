// Wyświetl nazwy miast w postaci listy numerowanej.
// Miasta zostały umieszczone w tablicy poniżej.
// Znacznik listy i elementów listy stwórz w JavaScript.
// Do każdego elementu listy dodaj klasę "city".
// Następnie za pomocą odpowiednich metod wyświetl listę na stronie.
// let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];
// Podpowiedź przed wysłaniem zadania do sprawdzenia:
// - za pomocą JavaScript należy stworzyć elementy HTML, a potem dopiąć je do strony :)
// - do wyświetlania miast użyj pętli (dowolnego rodzaju)

let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

let lista = document.createElement('ol');
document.body.appendChild(lista);

cities.forEach(city => {
    let podpunkt = document.createElement('li');
    podpunkt.className = 'city';
    podpunkt.innerText = city;
    lista.appendChild(podpunkt);
});