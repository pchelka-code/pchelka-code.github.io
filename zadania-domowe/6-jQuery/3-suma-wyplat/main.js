// Zaprogramuj przycisk #count-sum aby po kliknięciu pobrał wypłaty wszystkich pracowników i je zsumował.
// Uzyskany wynik wyświetl w elemencie o ID #sum.

// Podpowiedzi:
// - oprogramuj zdarzenie "click" przycisku #count-sum
// - pobierz wszystkie wypłaty i za pomocą pętli je zsumuj
// - pobierz element o ID #sum i podmień mu treść na obliczoną sumę

$( document ).ready( function() {

$('#count-sum').click(function(){
    let suma = 0
    $('.salary').each(function(){
        suma += parseInt($(this).text())
    })
    $('#sum').html(suma)
})

});
       
