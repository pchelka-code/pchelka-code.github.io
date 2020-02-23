function send (event) {
    event.preventDefault()
    // console.log(event)
    let person = {
        imie: document.getElementById('fname').value,
        nazwisko: document.getElementById('lname').value
    }
    console.log(person)

}

let formularz = document.getElementById('formularz')
formularz.addEventListener('submit', send)