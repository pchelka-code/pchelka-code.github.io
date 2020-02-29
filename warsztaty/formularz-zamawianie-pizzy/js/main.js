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







});


// 0. wyświetlanie ceny przy wyborze pizzy
// 1. Po klinięciu przycisku musi pobrać wszystkie dane
// 2. Za pomocą jQuery zrób walidację formularza. Walidator ma sprawdzać:
// - czy wszystkie pola zostały wypełnione? Jeśli nie, to zwracać odpowiedni komunikat
// - czy została wybrana Pizza przy zamówieniu? Jeśli nie, to zwracany odpowiedni komunikat
// 3. Na końcu walidator ma stworzyć obiekt zamówienia np. w formacie JSON i wyświetlić go w konsoli