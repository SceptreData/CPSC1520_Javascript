/*

Create a click event listener on the .image-links element.  The listener function
should set the src attribute of the img.target-image element and prevent the default
behaviour from occurring.

*/


let imgLinks = document.querySelector('.image-links');

function setSrc(event){
    console.log(event.target);
    event.preventDefault();
    let imgSrc = event.target.href;
    let tgt = document.querySelector('img.target-image');
    tgt.src = imgSrc;
}

imgLinks.addEventListener('click', setSrc);