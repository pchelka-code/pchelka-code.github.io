// 3. Po kliknięciu w przycisk ostatni paragraf ma zostać przeniesiony na
// pierwszą pozycję
// 4. Kolejne kliknięcia mają przenosić aktualnie ostatni paragraf na
// pierwszą pozycję
// 5. Stwórz kolejny przycisk (element button), który będzie miał działanie odwrotne, czyli będzie przenosił paragrafy z pierwszej pozycji na ostatnią

$( document ).ready( function() {

$('#up').click(function(){
    $('p:last').insertBefore('p:first')
})

$('#up').after('<button id="down">Down</button>')

$('#down').click(function(){
    $('p:first').insertAfter('p:last')
})


});