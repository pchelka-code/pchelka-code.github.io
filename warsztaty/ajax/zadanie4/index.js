// 2 funkcje - jedna podpięta do pl, druga do en i każda zmienia zawartość

// pobiera 


// function polski () {
//     let elem1 = document.getElementById('text1')
//     elem1.innerText = 'Strona Główna'
//     let elem2 = document.getElementById('text2')
//     elem2.innerText = 'O mnie'
//     let elem3 = document.getElementById('text3')
//     elem3.innerText = 'Galeria'
//     let elem4 = document.getElementById('text4')
//     elem4.innerText = 'Kontak'
// }

// function angielski () {
//     let elem1 = document.getElementById('text1')
//     elem1.innerText = 'Main Page'
//     let elem2 = document.getElementById('text2')
//     elem2.innerText = 'About'
//     let elem3 = document.getElementById('text3')
//     elem3.innerText = 'Gortfolio'
//     let elem4 = document.getElementById('text4')
//     elem4.innerText = 'Contact'
// }

// spróbujemy krótszą wersję:
let elem1 = document.getElementById('text1')
let elem2 = document.getElementById('text2')
let elem3 = document.getElementById('text3')
let elem4 = document.getElementById('text4')

function polski () {
    elem1.innerText = 'Strona Główna'
    elem2.innerText = 'O mnie'
    elem3.innerText = 'Galeria'
    elem4.innerText = 'Kontak'
}

function angielski () {
    elem1.innerText = 'Main Page'
    elem2.innerText = 'About'
    elem3.innerText = 'Gortfolio'
    elem4.innerText = 'Contact'
}

// a jeszcze krócej?