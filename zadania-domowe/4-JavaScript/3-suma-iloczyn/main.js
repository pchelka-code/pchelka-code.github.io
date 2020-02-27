let tablica = [1,2,3,4,5,6];

function SumaIloczyn(zmienna) {
    let suma = 0;
    let iloczyn = 1;
    for (let i = 0; i < zmienna.length; i++) {
        suma += zmienna[i];
        iloczyn *= zmienna[i];
    }

    console.log('Wynik dodawania: ', suma);
    console.log('Wynik mnożenia: ', iloczyn);
}

SumaIloczyn(tablica);