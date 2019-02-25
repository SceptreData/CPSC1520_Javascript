// Enter JavaScript for the exercise here...
let selectAll = document.querySelector('[name=toggle]');

let options = document.querySelectorAll('[name=message]');

selectAll.addEventListener('change', e=>{
    for (const opt of options){
        if (e.target.checked) {
            opt.checked = true;
        } else {
            opt.checked = false;
        }
    }
});