function get(num) {
    document.getElementById('inputText').value += num
}

function zliczanie () {
    let dzialanieDoWykonania = document.getElementById('inputText')
    dzialanieDoWykonania.value = eval(dzialanieDoWykonania.value)
}

function clean () {
    document.getElementById('inputText').value = ''
}
document.getElementById('clean').addEventListener('click', clean)

// // inna wersja zapisu linijki 3
// let wyswietlenie = document.getElementById('inputText')
// wyswietlenie.value += num
// // najdłuższa wersja (do zrozumienia)
// document.getElementById('inputText').value = document.getElementById('inputText').value + num

// zapis krok po kroku (dłuższy zapis) funkcji zliczanie 
// let dzialanieDoWykonania = document.getElementById('inputText')
// let wartoscPobranaZInputDoLiczenia = document.getElementById('inputText').value
// wartoscPobranaZInputDoLiczenia.value = eval(wartoscPobranaZInputDoLiczenia)


// cwiczenia z wykładu 1.03

let number = Math.floor(Math.random()*100)
fetch(`https://jsonplaceholder.typicode.com/posts/${number}`)
.then(res => res.json()) 
.then(res => {
    document.getElementById('inputText').value = res.title
    console.log(res)
}).catch(err => {
    console.log(err)
})

// fetch(`https://jsonplaceholder.typicode.com/users/${number}`)
// .then(res => res.json())
// .then(res => {
//     console.log(res)
// })