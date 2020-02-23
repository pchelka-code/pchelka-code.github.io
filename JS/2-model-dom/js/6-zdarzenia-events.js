"use strict";

// function funkcja1() {
//     alert('działa')
// }

function funkcja1() {
    let mainParagraf = document.getElementById('mainParagraf')
    mainParagraf.innerText = 'Zmieniłem się'
    mainParagraf.style.color = 'red'
    mainParagraf.style.fontSize = '50px'
    let divZSpan = document.getElementsByClassName('even')
    console.log('divZSpan', divZSpan[0].childNodes)
    let childrens = divZSpan[0].childNodes
    childrens.forEach(element => {
        if (element.nodeName == "SPAN") {
            console.log(element)
            element.innerText = 'zmiana'
        }
    })
}


let btnMain = document.getElementById('btn-hotel')
// drugi spoób, bez wpisywania w html, najbardziej polecany
// btnMain.addEventListener('click', funkcja1)


//trzeci sposób
btnMain.onclick = funkcja1




// opcja wybrania pojedynczego elementu span
// function funkcja1() {
//     let mainParagraf = document.getElementById('mainParagraf')
//     mainParagraf.innerText = 'Zmieniłem się'
//     mainParagraf.style.color = 'red'
//     mainParagraf.style.fontSize = '50px'
//     let divZSpan = document.getElementsByClassName('even')
//     console.log('divZSpan', divZSpan[0].childNodes)
//     let childrens = divZSpan[0].childNodes
//     childrens.forEach((element, index) => {
//         if (element.nodeName == "SPAN" && index ===3) {
//             console.log(element)
//             element.innerText = 'zmiana'
//         }
//     })
// }





// var secondLink = document.getElementsByTagName('a')[1]; //Tworzymy zmienna z drugim linkiem 

// function alarm(e) {
// 	e.preventDefault(); //zapobiegamy domyślnej akcji
//  	console.log('kliknięto kolejny link');
    
//     console.log(e.type);
// }


// secondLink.onclick = alarm; //wywiłujemy funkcję alarm() na drugim linku po kliknięciu



// var thirdLink = document.getElementsByTagName('a')[2]; //Tworzymy zmienna z trzecim linkiem 

// thirdLink.addEventListener('click', alarm); //wywołujemy funkcję alarm() na trzecim linku po kliknięciu za pomocą event Listenera


// thirdLink.removeEventListener('click', alarm);





///* Efekt powięszania napisu po najechaniu */
//var mainHeader = document.getElementById('main-header'); //Przypisujemy nagłówek strony do zmiennej
//
//function resize(e) { //Przekazujemy zdarzenia jako parametr funkcji
//	if (e.type == 'mouseover') { // sprawdzanie typu zdarzenia
//		mainHeader.style.fontSize = "70px"; //Zmień wielkość fonta po najechaniu
//	} else {
//		mainHeader.style.fontSize = "inherit"; //Przywróć domyślną wielkość po zjechaniu
//	}	
//}
//
//mainHeader.onmouseover = resize; //Wywołanie fukcji resize po najechaniu myszką na nagłówek
//mainHeader.onmouseout = resize; //Wywołanie fukcji resize po zjechaniu myszką z nagłówka
//








// /* Zatrzymanie propagacji - po klknięciu w nagłówek console.log(...) wywoła się dwa razy - dodajemy zatrzymanie propagacji i console.log(...) wywołuje się raz */
// function klikHeader() {
// 	console.log("kliknąleś w header");
// }

// document.getElementsByTagName('header')[0].onclick = klikHeader; //Wywołaj funkcję na elemencie header


// function klikH1(e) {
// 	e.stopPropagation(); //Odkomentować, żeby pokazać zatrzymanie propaginacji
// 	console.log("kliknąleś w h1");
// }

// document.getElementsByTagName('h1')[0].onclick = klikH1; //Wywołaj funkcję na elemencie H!





// let divsRow = document.getElementsByClassName('row');

// for (let element of divsRow) {
//     element.addEventListener('click', () => {
//         console.log('Wyświetla się ToolTip pokazujący info o wierszu');
//     });
// }

// let buttonsEdit = document.getElementsByClassName('edit');

// for(let element of buttonsEdit) {
//     element.addEventListener('click', (e) => {
//         e.stopPropagation();
//         console.log('Wyświetla się edycja danych tego wiersza');
//     });
// }