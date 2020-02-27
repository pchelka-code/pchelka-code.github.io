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
        for (let i=1; i<parN; i++) {
            parK = par2 + par1;
            par1 = par2;
            par2 = parK;
        }
    }
    console.log(`Wartość ${n} wyrazu ciągu Fibonacciego: `, parK);
    return parK;
}

fibo(11);
