/*

Create a click event listener on the .image-links element.  The listener function
should set the src attribute of the img.target-image element and prevent the default
behaviour from occurring.

*/

let targetImg = document.querySelector('.target-image');
let imgLinks = document.querySelector('.image-links');


// build our gallery
imgLinks.addEventListener('mouseover', event => {
    event.preventDefault();
    curTarget = event.target;
    if (curTarget.tagName == 'A')
        targetImg.src = curTarget.href;
});
