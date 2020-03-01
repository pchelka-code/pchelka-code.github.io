$(function(){

$('#tabela-select').change(function () {
    let tabelNbp = $(this).val()
    console.log('createTable -> tabelNbp', tabelNbp)
    fetch(`http://api.nbp.pl/api/exchangerates/tables/${tabelNbp}?format=json`)
    .then (res => res.json())
    .then (res => {
        const notowania = res[0].rates
        let tabela = res[0].table
        let allRates = $('#all-rates')
        allRates.empty()
        let olElement = $('<ol></ol>')

        if(tabela == 'C') {
            // console.log('res', res)
            notowania.forEach(item => {
                let walutaOpis = item.currency + ' ' + item.code + ' ' + item.bid + ' ' + item.ask
                let liElement = creatElement('li', walutaOpis)
                olElement.append(liElement)
            });
            allRates.append(olElement)
        }
        else {
            notowania.forEach(item => {
                let walutaOpis = item.currency + ' ' + item.code + ' ' + item.mid
                let liElement = creatElement('li', walutaOpis)
                olElement.append(liElement)
            });
            allRates.append(olElement)
        }
    })
})

function creatElement (tag, val) {
    let element = document.createElement(tag)
    element.innerHTML = val
    return element
}




})
