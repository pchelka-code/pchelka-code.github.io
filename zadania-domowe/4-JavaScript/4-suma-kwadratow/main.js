let tablica = [0,1,2,3,4,5];

function sumaKwadrat(zmienna) {
    let suma = 0;
    for (let i = 0; i < zmienna.length; i++) {
        suma += Math.pow(zmienna[i], 2);
    }

    console.log('Suma kwadratów: ', suma);
}

sumaKwadrat(tablica);