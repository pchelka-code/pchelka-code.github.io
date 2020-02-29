let tablica = [0,1,2,3,4,5];

function sumaKwadrat(zmienna) {
    let suma = 0;
    for (let i = 0; i < zmienna.length; i++) {
        suma += Math.pow(zmienna[i], 2);
    }

    console.log('Suma kwadratów: ', suma);
}

sumaKwadrat(tablica);


// Inna wersja
let num = [0,1,2,3,4,5];

function sumaKwadratow () {
    let kwadrat = 0;
    for(let i=0; i< num.length; i++) {
        kwadrat += Math.pow(num[i],2);
    }
    return kwadrat
}

let wynik = sumaKwadratow()
console.log(wynik);

// Wersja z forEach JS6 (nowsza wersja)

function sumaKwadratow2 () {
    let kwadrat = 0
    num.forEach(item => {
        kwadrat += Math.pow(item,2)
    })
    return kwadrat
}

let wynik2 = sumaKwadratow2()
console.log(wynik2)