//albo można wyciągną zmienną globalną, wtedy uwuwamu z linijek 5 i 16
//let mainHeader = document.getElementById('main-header') 

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
