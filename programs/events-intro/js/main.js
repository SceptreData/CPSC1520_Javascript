// 1. select the target element
let img = document.querySelector('img.feature');
// 2. create the event listener function
function displayHidden(){
    console.log("You clicked my tree!");
    let par = document.querySelector('p.description');
    par.classList.toggle('hidden');
}
// 3. add event listener
img.addEventListener('click', displayHidden);

let slider = document.querySelector("#my-range");
let output = document.querySelector('.value');

output.innerHTML = slider.value;

slider.oninput = function(){
    output.innerHTML = this.value;
    img.style.opacity = (this.value / 100);
}
