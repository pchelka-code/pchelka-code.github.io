"use strict";
//żeby używać biblioteki trzeba zacząć od kodu (wersja 1 lub 2), wtrzymuje wykonywanie kodu do wczytania całej struktury DOM


// wersja 1 - początek i koniec dokumentu, w środek wpisujemy cały kod

// $( document ).ready( function() {
//   // kod do wykonania
//   } );



// wersja 2
// $(function (){
//   // kod do wykonania
// });





$(function () {

  let paragraf1 = $("p.paragraf")
  let para1 = $('#para1')

//  zmiana styli dla danego elementu
  // para1.css({
  //   "backgroundColor" : "red",
  //   "color": "red"
  // })

  let przycisk = $('button#fadeOut')
  przycisk.css({
    'backgroundColor' : 'pink',
    'width' : '300px'
  })

  // text - podmienia tekst nie czyta tagów, html - czyta tagi 
  // let h1 = $('#first')
  // h1.text('jsjsjsjsjsjjssjsjsjsj')
  // h1.html('<strong>ssss</strong>')

  // dodawanie elementów, automatycznie czyta tagi
  // h1.append('po')
  // h1.prepend('przed')
  // h1.after('<h1>po h1</h1>')
  // h1.before('przed h1')

  // tworzenie nowego elementu
  // let neW = $('<div></div>')
  // neW.html('<p>Super<p>')
  // h1.append(neW)

  // cwiczenie - dodanie długiego elementu
  // let lista = $('<ul></ul>')
  // lista.append('<li>1</li><li>2</li><li>3</li><li>4</li><li>5</li>')
  // h1.append(lista)

  // dodawanie funkcją
  // let h1 = $('#first')
  // let neW = $('<ul></ul>')
  // for(let i=0; i<100; i++) {
  //   let liElement = $('<li></li>')
  //   liElement.text(i+1)
  //   neW.append(liElement)
  //   h1.append(neW)
  // }

  let paragra = $('p')
  console.log(paragraf1)
  console.log(para1)
  console.log(paragra)
  // console.log("$('#first')", $('#first'))
  // console.log(" $('p.paragraf')", $('p.paragraf'))
  // $('p.paragraf')
  // .hide('slow')
  // .show(3000)
  // .css({background: 'red',color: "black"})

  // console.log(" $('#idDiv p.paragraf2')", $('#idDiv p.paragraf2'))
  // console.log("span", $(".nowydiv span"))
  // let allP = $("p");
  // console.log(allP);
let nowyDiv = $('.nowydiv')
  $('.nowydiv').append(" append DDDDDDDDDDDDDDDDDDDDDDDDDD")
  nowyDiv.prepend("prepend() ffffffffffffffffffff")
  nowyDiv.after("<p>after() dddddderfsdfgdsagsa</p>")
  
  nowyDiv.css({
    "backgroundColor" : "red",
    "color": "red"
  })
  nowyDiv.addClass("kdjfjdskfjsjkf")
// $("button").click(function () {
//   $('p').each(function () {
//     $(this).text("wow")
//   })
// })
// nowyDiv.on({
// 'click' : function () {
// console.log("click")
// },
// "dblclick" : function () {
//   alert("dblclikc")
// }


// })


// $(".target").change(function () {
// console.log($(this).val())

// })

$('#hide').click(function (){
  $(".nowydiv").slideUp(2000)
})

$("#fadeOut").click(function () {
  $("#idDiv").fadeOut(2000)
})

console.log($("#spanMain"))


  $("span").animate({"color": "red"}, 2000);

});
