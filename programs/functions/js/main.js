function sup(num) {
    for (i = 0; i < 10; i++){
        console.log(i)
    }
}

function updateHTML(selector, newVal){
    document.querySelector(selector).innerHTML = newVal;
}

function strong(val){
    return "<strong>" + val + "</strong>";
}

sup(10);

updateHTML(".intro", "Wowza!");

var importantPar = document.querySelector(".important").innerHTML;
console.log(importantPar);

var strongPar = strong(importantPar);
updateHTML(".important", strongPar);