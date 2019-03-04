// your js here...
let images = [
    'img/mountain1.jpg',
    'img/mountain2.jpg',
    'img/mountain3.jpg'
];

let img = document.querySelector('img');
let carousel = document.querySelector('.carousel');

let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

let curImg = 0;

img.src = images[curImg];

carousel.addEventListener('click', e => {
    let target = e.target;
    if (target.classList.contains('next')) {
        curImg++;
        if (curImg > 2) curImg = 0;
    }
    else if (target.classList.contains('prev')){
        curImg--;
        if (curImg < 0) curImg = 2;
    }


    img.src = images[curImg]
})