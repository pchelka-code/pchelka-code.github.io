'use strict';

$(function (){
// 0. Wczytywanie ceny zależnie od wyboru pizzy 
    const priceTable = [
        {
            id: 1,
            price: 25
        },
        {
            id: 2,
            price: 30
        },
        {
            id: 3,
            price: 29
        },
        {
            id: 4,
            price: 20
        },
        {
            id: 5,
            price: 45
        }
    ];

    $('#pizza').change(function() {
        let pizzaType = $(this).val()
        let spanPrice = $('#price')
        if(pizzaType == 0) {
            spanPrice.text("0 zł")
        }
        priceTable.forEach(item => {
            if(item.id == pizzaType) {
                spanPrice.text(item.price + ' zł')
            }
        })
    })


// 1. Po kliknięciu pobiera wszystkie dane i 2. waliduje czy formularz jest wypełniony
$('#pizza-order').submit(function (e){
    e.preventDefault()
    let firstName = $('#name').val()
    let lastName = $('#lastName').val()

    let street = $('#street').val()
    let streetNo = $('#number').val()

    let postCode = $('#postcode').val()
    let city = $('#city').val()

    let pizza = $('#pizza').val()

    let tomatoSouce = $('#pomidor').is(':checked')
    let garlicSouce = $('#czosnek').is(':checked')
// przy inpucie typu chceckbox .is(':checked') sprawdza czy jest zaznaczony
    let agree = $('#agreement').is(':checked')

    let error = []
    $('#errors').empty()

    if (firstName === '') {
        error.push('Podaj imię')
    }
    if (lastName === '') {
        error.push('Podaj nazwisko')
    }
    if (street === '') {
        error.push('Podaj ulicę')
    }
    if (streetNo === '') {
        error.push('Podaj numer domu')
    }
    if (postCode === '') {
        error.push('Podaj kod pocztowy')
    }
    if (city === '') {
        error.push('Podaj miasto')
    }
    if (pizza == 0) {
        error.push('Wybierz pizzę')
    }
    if (tomatoSouce === false && garlicSouce === false) {
        error.push('Wybierz sos')
    }
    if (agree === false) {
        error.push('Nie zaznaczona zgoda')
    }
    console.log(error)
    error.forEach( item => {
        let err = '<li>' + item + '</li>'
        $('#errors').append(err)
    })

    // stworzenie obiektu zamówienie
    let zamowienie = {
        name: firstName + ' ' + lastName,
        miasto: city,
        sosy: [tomatoSouce, garlicSouce]
    }
    console.log('Zamówienie', zamowienie)
})



});


// 0. wyświetlanie ceny przy wyborze pizzy
// 1. Po klinięciu przycisku musi pobrać wszystkie dane
// 2. Za pomocą jQuery zrób walidację formularza. Walidator ma sprawdzać:
// - czy wszystkie pola zostały wypełnione? Jeśli nie, to zwracać odpowiedni komunikat
// - czy została wybrana Pizza przy zamówieniu? Jeśli nie, to zwracany odpowiedni komunikat
// 3. Na końcu walidator ma stworzyć obiekt zamówienia np. w formacie JSON i wyświetlić go w konsoli