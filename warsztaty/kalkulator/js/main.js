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