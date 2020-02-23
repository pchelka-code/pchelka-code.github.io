"use strict";

// console.log("window", window);
// console.log("window.innerHeight", window.innerHeight);
// console.log("window.outerHeight", window.outerHeight);


// console.log("document", document);
// console.log("document.documentElement", document.documentElement);
// console.log("document.head", document.head);
// console.log("document.body", document.body);

//precyzyjne wywołanie konkretnego elementu z html
let elementId = document.getElementById('parFirst')
console.log('elementId', elementId)
console.log('elementId', elementId.childNodes)


// //pobranie po klasie - otrzymujemy tablicę, więc potem trzeba wybrać element z tablicy
// let elementClass = document.getElementsByClassName('link')
// console.log('elementClass', elementClass)

// //pobieranie po tag name -bardzo nieprecyzyjne, odradzane
// let paragraf = document.getElementsByTagName('p')
// console.log('paragraf', paragraf)

// //pobieranie po selektorze
// let selector = document.querySelectorAll('.link')
// console.log('selector', selector)


// let allP = document.getElementsByTagName('p')
// // alert(123)
// allP[0].innerHTML = "sjdfhjdshfjsdfhjdsfjfhdsfsfkjsfjksdlh"
// console.log("TCL: allP", allP)

// let allLink = document.querySelectorAll(".link");
// console.log("TCL: allLink", allLink)


// //pierwszy napotkany element z daną klasą
// let firstLink = document.querySelector(".link");
// firstLink.innerHTML = "kdfjkdsfjdksfdshfdjfhdsdjkfjdfhf"
// console.log("TCL: firstLink", firstLink)

let inputMain = document.getElementsByClassName('input-form')
// console.log('inputMain', inputMain[0].childNodes)
let valueInput = inputMain[0].childNodes
valueInput.forEach(item => {
    console.log(item)
})
//console.log(item.value) - w mozzila by zadziałało bo zapamiętuje wartości, na chrom jest puste


//zmiana zawartości elementu z id #mainParagraf
//inerHtml pobiera zawartość, a po znaku = zmienia zawartość, odczytuje tagi html np. <button>
let paragraf = document.getElementById('mainParagraf')
// debugger
paragraf.innerHTML = "Już nie paragraf tylko co innego"
console.log('paragraf', paragraf)
console.log('paragraf', paragraf.innerHTML)


//zmienia tekst ale czyta całość jako tekst, nie łapie tagów
// paragraf.innerText = "<button>Już nie paragraf tylko co innego</button>"
// console.log('paragraf', paragraf.innerText)



let mainA = document.getElementById('nowyLink')
console.log('mainA', mainA)
mainA.href = 'https://www.w3schools.com/'
mainA.className = 'nowaKlasa'
mainA.innerText = 'Tekst który chce'