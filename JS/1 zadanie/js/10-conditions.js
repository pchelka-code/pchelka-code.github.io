'use strict';

let userOneHeight = 190;
let userTwoHeight = 190;


/*

Warunek if

*/
if ( userTwoHeight < userOneHeight ) {
    console.log("Olga jest niższa :)");
}



/*

Warunek if else

*/
if ( userTwoHeight > userOneHeight ) {
    
    console.log("Olga jest wyższa :)");
    
} else {
    
    console.log("Olga jest niższa");
    
}
//inny przykład

let dzien = "Wtorek"
if ( dzien === "Poniedziałek" ) {
    console.log("Znów do roboty");
} else {
    console.log("Dobrze, że nie poniedziałek")
}


//jeszcze inny przykład, sprawdzenie dni tygodnia

let data = new Date()
console.log(data)
let dzien1 = data.getDay()
console.log(dzien1)
if ( dzien1 === 1 ) {
    console.log("Znów do roboty");
} else if (dzien1 === 6) {
    console.log("Hurra, sobota dzień programowania")
}



/*

Warunek if else if

*/
if ( userTwoHeight > userOneHeight ) {

    console.log("Olga jest wyższa :)");

} else if ( userTwoHeight == userOneHeight ) {

    console.log("Olga tak wysoka jak Mateusz");

} else {

    console.log("Olga jest niższa");

}




/*

Warunek switch - to samo co if else ale krótszy zapis więc przydaje się przy kilku zagniezdżonych if

*/
let color = 'zielony';

switch (color) {
    case 'czerwony':
        console.log('Kolor czerwony')
        break;
    case 'zielony':
        console.log('Kolor zielony')
        break;
    case 'niebieski':
        console.log('Kolor niebieski')
        break;
    default:
        console.log('Inny color')        
}
    

//switch przykład z dniem

switch (dzien1) {
    case 1:
        console.log('poniedziałek')
        break;
    case 2:
        console.log('wtorek')
        break;
    case 5:
        console.log('piatek')
        break;
    default:
        console.log('Inny dzień')
}