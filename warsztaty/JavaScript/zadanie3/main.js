function send (event) {
    event.preventDefault()
    // console.log(event)
    let person = {
        imie: document.getElementById('fname').value,
        nazwisko: document.getElementById('lname').value,
        email: document.getElementById('email').value
    }
    console.log(person)

}

let formularz = document.getElementById('formularz')
formularz.addEventListener('submit', send)

//Pierwsza wersja
// function changeInput() {
//     let info = document.getElementById('change').value
//     console.log ("changeIput -> info", info)
// }

function changeInput(daneZInputa) {
    console.log ("changeIput -> info", daneZInputa)
}