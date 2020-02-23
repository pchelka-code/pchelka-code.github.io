"use strict";

console.log("window", window);
console.log("window.innerHeight", window.innerHeight);
console.log("window.outerHeight", window.outerHeight);


console.log("document", document);
console.log("document.documentElement", document.documentElement);
console.log("document.head", document.head);
console.log("document.body", document.body);


let allP = document.getElementsByTagName('p')
alert(123)
allP[0].innerHTML = "sjdfhjdshfjsdfhjdsfjfhdsfsfkjsfjksdlh"
console.log("TCL: allP", allP)

let allLink = document.querySelectorAll(".link");
console.log("TCL: allLink", allLink)

let firstLink = document.querySelector(".link");
firstLink.innerHTML = "kdfjkdsfjdksfdshfdjfhdsdjkfjdfhf"
console.log("TCL: firstLink", firstLink)