
// Pobierz dane z adresu URL - funkcja fetch(zwraca obiekt Promise - Obietnica)
// Jeśli Promise zostanie rozwiązany to fetch() zwróci obiekt odpowiedzi (response)
// Zwracamy obiekt odpowiedzi przetworzony na obiekt JSON
// Od tego momemtu możemy korzystać z tych danych
$('#btnGetData').click(function () {
let numbeInput = document.getElementById("number").value

    fetch(`https://jsonplaceholder.typicode.com/posts/${numbeInput}`)
    .then(response =>response.json())
    .then(response=>{
        console.log(response);
        $("#resBody").text(response.body)
        $("#resName").text(response.id)
        $('#resTitle').text(response.title)

    });

})

// z wykładów:
// fetch('https://jsonplaceholder.typicode.com/posts/5')
// .then(res =>.json()) 
// // zmienia string w jsona
// .then(res => {
//     console.log(res)
// }).catch(error => {
//     console.log(error)
//     )
// })