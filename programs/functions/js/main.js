
function updateInnerHTML(selector, newVal){
    document.querySelector(selector).innerHTML = newVal;
}

function strong(val){
    return "<strong>" + val + "</strong>";
}


updateInnerHTML(".intro", "Wowza!");

var importantPar = document.querySelector(".important").innerHTML;
console.log(importantPar);

var strongPar = strong(importantPar);
updateInnerHTML(".important", strongPar);

/*
 * Assessment Code
 * ------------------ */
function italics(val) {
    return "<i>" + val + "</i>";
}

function updateItalic(selector){
    var elt = document.querySelector(selector);
    var text = elt.innerHTML;
    text = "<i>" + text + "</i>";

    elt.innerHTML = italText;
}

updateItalic(".note");

// var span = document.querySelector(".note").innerHTML;
// var italicSpan = italics(span);

// updateInnerHTML(".note", italicSpan);

// // window.addEventListener("click", function(){
// //     console.log("YO WASSUP");
// // });

// let button = document.querySelector("button");

// // button.addEventListener("click", () => {
// //     console.log("You clicked the button!");
// // });

// function once() {
//     console.log("Goodbye Events!");
//     button.removeEventListener("click", once)
// }