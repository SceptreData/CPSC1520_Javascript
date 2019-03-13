/*

    DAVID's RAD CAROUSEL

*/

let images = [
    'img/mountain1.jpg',
    'img/mountain2.jpg',
    'img/mountain3.jpg'
];

let img = document.querySelector('img');
let carousel = document.querySelector('.carousel');

let curImg = 0;
img.src = images[curImg];

function nextImage(){
    curImg++;
    if (curImg > 2)
        curImg = 0;
    img.src = images[curImg]
}

function prevImage() {
    curImg--;
    if (curImg < 0)
        curImg = 2;
    img.src = images[curImg]
}

carousel.addEventListener('click', e => {
    let target = e.target;
    if (target.classList.contains('next')) {
        nextImage();
    }
    else if (target.classList.contains('prev')){
        prevImage();
    }

});

document.addEventListener('keyup', e=> {
    if (e.key === 'ArrowRight'){
        nextImage();
    }
    else if (e.key === 'ArrowLeft'){
        prevImage();
    }
})