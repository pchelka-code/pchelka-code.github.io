//albo można wyciągną zmienną globalną, wtedy uwuwamu z linijek 5 i 16
// let mainHeader = document.getElementById('main-header') 

function addPar() {
    let mainHeader = document.getElementById('main-header') 
    mainHeader.innerHTML = ''
    for(let i=0; i < 10; i++) {
        let paragraf = document.createElement('p')
        paragraf.innerText = 'Stworzony paragraf ' + (i + 1)
        paragraf.setAttribute('class', 'main-paragraf')
        mainHeader.appendChild(paragraf)
    }
}

function deletePar() {
    let mainHeader = document.getElementById('main-header') 
    mainHeader.innerHTML = ''
}
document.getElementById('deletePar').addEventListener('dblclick', deletePar)


function changeBg() {
    document.body.style.backgroundColor = 'red'
}

let bg = document.getElementById('bg')
bg.onclick = changeBg


function changePar() {
    let allParagraf = document.getElementsByClassName('main-paragraf')
    if (allParagraf.length != 0) {
        // allParagraf[2].innerText = "zmiana"
        let numberParagraf =Math.floor(Math.random() * 10)
        allParagraf[numberParagraf].innerHTML = 'zmieniłam paragraf numer ' + (numberParagraf + 1)
    }
}

let change = document.getElementById('change')
change.onclick = changePar


function image() {
    let mainSection = document.getElementById('main-section')
    let newImage = document.createElement('img')
    newImage.setAttribute('src', 'truskawka.jpg')
    newImage.style.width = '60%'
    mainSection.appendChild(newImage)
}

let addImg = document.getElementById('addImg')
addImg.onclick = image