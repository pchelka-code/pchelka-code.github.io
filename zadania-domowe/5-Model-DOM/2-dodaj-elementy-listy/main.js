function dodanieItemu () {
    let lista = document.getElementById('items')
    let nowyItem = document.createElement('li');
    let liczbaItemow = document.getElementsByClassName('item').length;
    nowyItem.className = 'item';
    nowyItem.innerText = 'Item ' + (liczbaItemow+1);
    lista.appendChild(nowyItem);
}

let btnMain = document.getElementById('btn')
btnMain.addEventListener('click', dodanieItemu)

// Napisz skrypt, który po kliknięciu w przycisk doda kolejny element do listy z nazwą zakończoną liczbą kolejnego elementu - np. Item 4, Item 5, Item 6 itd.
// Każdemu z elementów listy ustaw klasę "item"
// Podpowiedź przed wysłaniem zadania do sprawdzenia:
// - napisz funkcję obsługującą klik przycisku button
// - musisz pobrać obecną ilość item'ów w liście, aby dodać numer kolejnego
// - musisz stworzyć w JavaScript nowy element w HTML i dodać go do listy używając odpowiedniej do tego metody w JS :)

// Inna wersja:
// document.getElementById('btn').addEventListener('click', dodanieItemu)

// function createLi () {
//     const elementUl = document.getElementById('items').children
//     let iloscElementow = elementUl.children.length
//     let newLi = document.createElement('li')
//     newLi.setAttribute('class', 'item')
//     newLi.innerHTML = 'Item ' + (iloscElementow +1)
//     elementUl.appendChild(newLi)
// }