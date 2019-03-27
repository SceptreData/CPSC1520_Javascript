// your js here...
var images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
var currentImg = 0;
var idx;
let targetImg = document.querySelector('img');

// display the current image
document.querySelector('.carousel>img').src = 'images/' + images[0];

// add the appropriate number of selector bullets
for (idx = 0; idx < images.length; idx += 1) {
    document.querySelector('.image-tracker').innerHTML += '<span data-idx="' + idx + '">&bull;</span>';
}

// highlight the first bullet as 'active'
document.querySelector('.image-tracker').querySelector('span').classList.add('active');
targetImg.style.opacity = 1;

// add event listener for carousel controls
document.querySelector('.carousel').addEventListener('click', function(evt) {
    var target = evt.target;
    if (target.classList.contains('control') || target.hasAttribute('data-idx')) {
        if (target.classList.contains('next')) {
            // move to the next index in the array
            moveSlide(+1);
        } else if (target.classList.contains('prev')) {
            // move to the previous index in the array
            moveSlide(-1);
        } else {
            // selector bullet clicked
            // use Number() to convert from string to number
            currentImg = Number(target.dataset.idx);
            targetImg.src = 'images/' + images[currentImg];
            targetImg.style.opacity = 1;
        }

        // display the new current image
     

        // update the active selector bullet
        document.querySelector('.image-tracker .active').classList.remove('active');
        document.querySelectorAll('[data-idx]')[currentImg].classList.add('active');
    }
});

// add a keypress event listener for left/right navigation
document.addEventListener('keydown', function(evt) {
    var click;
    switch (evt.keyCode) {
        case 39:
            // right arrow, trigger .next click
            click = document.createEvent('HTMLEvents');
            click.initEvent('click', true, true);
            document.querySelector('.carousel .control.next').dispatchEvent(click);
            break;
        case 37:
            // left arrow, trigger .prev click
            click = document.createEvent('HTMLEvents');
            click.initEvent('click', true, true);
            document.querySelector('.carousel .control.prev').dispatchEvent(click);
            break;
    }
});

// Preload images
(function (images) {
	let img;
	for (let imgSrc of images){
		img = new Image();
		img.src = 'images/' + imgSrc;
	}
}(images));

function moveSlide(dir){
    currentImg += dir;
    if (currentImg < 0){
        currentImg = images.length - 1;
    } else if (currentImg >= images.length){
        currentImg = 0;
    }
    targetImg.src = 'images/' + images[currentImg];
    targetImg.style.opacity = 1;

    document.querySelector('.image-tracker .active').classList.remove('active');
    document.querySelectorAll('[data-idx]')[currentImg].classList.add('active');
}

function fadeOutSlide(nxtSlide){
	let {style} = targetImg;
	let fadeEffect = setInterval(()=>{
		if (style.opacity > 0){
			style.opacity -= 0.1;
		}
	}, 50);
	let endFade = setTimeout(()=> {
		clearInterval(fadeEffect);
		moveSlide(nxtSlide);
		style.opacity = 0;
		fadeInSlide();
	}, 500);
}

function fadeInSlide(){
		let fadeInEffect = setInterval(()=>{
			let {style} = targetImg;
			if(style.opacity < 1){
				let opacity = Number(style.opacity);
				style.opacity = opacity + 0.1;
			}
		}, 50);

		let endFadeIn = setTimeout(()=> {
			clearInterval(fadeInEffect);
		}, 500);
}

let imgAutoScroll = setInterval(()=> {
	fadeOutSlide(+1);
}, 4000);

targetImg.addEventListener('mouseenter',()=>{
	clearInterval(imgAutoScroll);
});

targetImg.addEventListener('mouseleave', ()=> {
	imgAutoScroll = setInterval(()=>{
		fadeOutSlide(+1);
	}, 4000);
});

let timerTimeout;
function timer(){
    timerTimeout = setInterval(()=> {
        console.log('booya');
    }, 1000);
    console.log(typeof(timerTimeout));
}
