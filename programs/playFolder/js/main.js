// let button = document.querySelector("button");
// button.addEventListener("mousedown", event => {
//     if (event.button == 0)
//         console.log("Left button");
//     else if (event.button == 1)
//         console.log("Middle button");
//     else if (event.button == 2)
//         console.log("Right Button");
// });

let para = document.querySelector("p");
let button = document.querySelector("button");

para.addEventListener("mousedown", function(){
    console.log("Handler for Paragraph");
});

button.addEventListener("mousedown", function(event){
    console.log("Handler for button.");
    if (event.button == 2) event.stopPropagation();
});

window.addEventListener("keydown", event=>{
    if (event.key == 'q')
        document.body.style.background = 'violet';
});

window.addEventListener("keyup", event=>{
    if (event.key == 'q')
        document.body.style.background = '';
});

let balloon = document.querySelector(".balloon");
balloon.style.fontSize = '10px';

let curSize = 10;

function pop(thing){
    thing.innerHTML = 'X';
    window.removeEventListener("keydown", changeBalloon);
}

function changeBalloon(event) {
    console.log(event);
    if (event.key == 'ArrowUp'){
        console.log("Its happening");
        curSize *= 1.1;
        if (curSize >= 48){
            pop(balloon);
        } else {
            balloon.style.fontSize = curSize + 'px';
        }
    }
    if (event.key == 'ArrowDown'){
        curSize -= curSize * 0.1;
        if (curSize < 1) curSize = 1;
        balloon.style.fontSize = curSize + 'px';
    }
}

// window.addEventListener("keydown", event=> 
//     {changeBalloon(event)});

window.addEventListener('keydown', changeBalloon);