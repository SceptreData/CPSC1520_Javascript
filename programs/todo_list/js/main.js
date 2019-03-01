// Enter JavaScript for the exercise here...
let selectAll = document.querySelector('[name=toggle]');
let options = document.querySelectorAll('[name=message]');

let input = document.querySelector('#userInput');
let submit = document.querySelector('#formSubmit');
let form = document.querySelector('form');

let contentList = document.querySelectorAll('td');

console.log(input.value);
console.log(submit);
selectAll.addEventListener('change', e=>{
    for (const opt of options){
        if (e.target.checked) {
            opt.checked = true;
        } else {
            opt.checked = false;
        }
    }
});

form.addEventListener('submit',function(e) {
    e.preventDefault();
    console.log(input.value);

    let searchVal = input.value.toUpperCase();

    for (let i = 1; i < contentList.length; i += 2){
        let txt = contentList[i].innerText.toUpperCase();

        if (txt.indexOf(searchVal) > -1){
            contentList[i].classList.add('highlight');
        }
    }
});

