function fibo(n) {
    let parN = n;
    let par1 = 0;
    let par2 = 1;
    let parK = 0;

    if (parN==1) {
        console.log('Wartość 1 wyrazu ciągu Fibonacciego: ', par1);
    }

    else if (parN==2) {
        console.log('Wartość 2 wyrazu ciągu Fibonacciego: ', par2);
    }
    else {
        for (let i=2; i<parN; i++) {
            parK = par2 + par1;
            par1 = par2;
            par2 = parK;
        }
    }
    console.log(`Wartość ${n} wyrazu ciągu Fibonacciego: `, parK);
    return parK;
}

fibo(11);


// Inna wersja
// let num = [0,1]
// let wynik = [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987]

// function fibo2 (n) {
//     let nowy = num[num.length-1] + num[num.length -2]
//     num.push(nowy)
// }
// console.log(num[num.length-1])

// fibo2(12)