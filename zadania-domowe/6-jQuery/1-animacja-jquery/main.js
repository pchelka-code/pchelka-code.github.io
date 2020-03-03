$( document ).ready( function() {

$('#btn').click(function(){
    $('#kwadrat').animate({
        left: '100px',
        height: '100px',
        width: '100px',
    }, 3000, function() {
        $('#kwadrat').animate({
            backgroundColor: 'blue'
        }, 5000, function() {
            $('#kwadrat').html('<h2>Animacja zakończona</h2>');
        });
    });
})


});