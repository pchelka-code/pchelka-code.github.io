'use strict';

// let jsonPersons = {
//     "osoby": [
//         {
//             imie: "Krystian", 
//             nazwisko: "Dziopa", 
//             wzrost: 180, 
//             oczy: "niebieskie", 
//             zainteresowania: [ 
//                 { nazwa: "podroze" }, 
//                 { nazwa: "gotowanie" }
//             ] 
//         },
//         {
//             imie: "Dominik",
//             nazwisko: "Gomuła",
//             wzrost: 170,
//             oczy: "brązowe",
//             zainteresowania: [
//                 { nazwa: "gotowanie" },
//                 { nazwa: "języki" }
//             ]
//         },
//         {
//             imie: "Claudia",
//             nazwisko: "Żelazowska",
//             wzrost: 167,
//             oczy: "brązowe",
//             zainteresowania: [
//                 { nazwa: "programowanie" },
//                 { nazwa: "podroze" },
//                 { nazwa: "języki" }
//             ]
            
//         }
//     ]
// }

// console.log(jsonPersons);


// jsonPersons.osoby[2].zainteresowania.forEach( function (element, index) {
//     console.log(element.nazwa);
// });

//console.log(jsonPersons.osoby[2].zainteresowania);

// console.log(jsonPersons.osoby[1].oczy);


// console.log(jsonPersons.osoby.forEach(osoba => {
//     console.log("oczy " + osoba.imie + " mają kolor " + osoba.oczy)
// }))


//ciekawostka - pobrane dane ze strony, wyświetla wszystkie id
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(res => {
//         res.forEach(element => {
//             console.log(element.id)
//         });
// })


// wypisze tytuł posta osoby, która ma userid 4
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(res => {
//         res.forEach(element => {
//             if (element.userId === 4) {
//                 console.log(element.title)
//             }
//         });
// })


//tytuł i body dla id 88
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(res => {
        res.forEach(element => {
            if (element.id === 88) {
                console.log(element.title, element.body)
            }
        });

        let tenPost = res.filter(item => {
            return item.userId === 4
        })
        console.log(tenPost)
})
//albo  console.log(element.title)
//      console.log( element.body)  żeby jedno pod drugim wypisało

// filtrowanie (wiersz 89)



//jsonPersons.osoby[0].zainteresowania.forEach( function(zainteresowanie, index) {
//    console.log("index: " + index + " zainteresowanie: " + zainteresowanie.nazwa)
//});