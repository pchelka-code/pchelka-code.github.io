$('#btn').click(function() {
    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
    .then(resp => resp.json())
    .then(resp =>{
        console.log('resp', resp)
        $('#dane-programisty').html('imię: ' + resp.imie + ', nazwisko: ' + resp.nazwisko + ', zawód: ' + resp.zawod + ', firma: ' + resp.firma)
    }) 
})
