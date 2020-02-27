let jsonPracownicy = {
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
}

console.log(jsonPracownicy.pracownicy);

jsonPracownicy.pracownicy.forEach(function(name, index) {
    console.log("Pracownik o indeksie " + index + " nazywa się: " + name.firstName, name.lastName);
})