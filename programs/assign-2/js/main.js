/*
 *      Assignment 2
 *      David Bergeron
 */

let input = document.querySelector('.frm-control');
let reset = document.querySelector('.reset');
let images = document.querySelectorAll('.thumb-display');
let tagList = document.querySelectorAll('.tags');


input.addEventListener('input', ()=> {
    if (isEmptyOrWhiteSpace(input.value)){
        reset.classList.add('hidden');
    } else {
        reset.classList.remove('hidden');
    }
    
    let searchVal = input.value.toUpperCase();
    for (let [idx, img] of images.entries()){
        let imgTags = tagList[idx].innerText.toUpperCase();
        if (imgTags.includes(searchVal)) {
            img.classList.remove('hidden');
        } else {
            img.classList.add('hidden');
        }
    }
});


reset.addEventListener('click', ()=> {
    reset.classList.add('hidden');
    input.value = "";
    for (let img of images){
        img.classList.remove('hidden');
    }
});


function isEmptyOrWhiteSpace(str) {
    return !str || !str.trim();
}
