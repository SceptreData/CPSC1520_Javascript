var targetImage = document.querySelector('.target-image');
var controlsDiv = document.querySelector('.controls');
var currentImage = 0;
var opacity = 1;
var intervalId;
var images = [
	'img/beach1.jpg',
	'img/beach2.jpg',
	'img/beach3.jpg'
];

controlsDiv.addEventListener('click', controlsHandler);
document.addEventListener('keydown', documentHandler);
targetImage.style.opacity = 1;

// TODO: create a fadeOut function. Incrementally decreases the opacity until
// it reaches 0; once opacity is 0, switch to the new image and fadeIn()

function fadeOutSlide(nxtSlide){
	let {style} = targetImage;
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
			let {style} = targetImage;
			if(style.opacity < 1){
				let opacity = Number(style.opacity);
				style.opacity = opacity + 0.1;
				console.log(style.opacity);
			}
		}, 50);

		let endFadeIn = setTimeout(()=> {
			clearInterval(fadeInEffect);
		}, 500);
}
// TODO: create a fadeIn() function
// Incrementally increases the opacity until it reaches 1

function moveSlide(dir) {
	// try to advance the current image
	currentImage += dir;
	// check for before the first, or after the last...
	if (currentImage < 0) {
		currentImage = images.length - 1;
	} else if (currentImage === images.length) {
		currentImage = 0;
	}

	// TODO: make adjustmetns in order to manage the fade out and fade in of the image
	targetImage.src = images[currentImage];
	targetImage.style.opacity = 1;
}

function documentHandler(evt) {
	switch (evt.code) {
		case 'ArrowRight':
			// next image
			moveSlide(+1);
			break;
		case 'ArrowLeft':
			// prev image
			moveSlide(-1);
			break;
	}
}

function controlsHandler(evt) {
	// Determine the next index for image to show
	switch (evt.target.className) {
		case 'btn-prev':
			moveSlide(-1);
			break;
		case 'btn-next':
			moveSlide(+1);
			break;
		case 'btn-cancel-rotation':
			clearInterval(imgAutoScroll);
			break;
	}
}

// TODO: preload known images
(function (images) {
	let img;
	for (let imgSrc of images){
		img = new Image();
		img.src = imgSrc;
	}
}(images));


// TODO: Set Timeout
let autoPlay = setTimeout(()=> {
	console.log("EXAMPLUH");
}, 5000);


// TODO: Show ticks on console.
let ticks = 0;
let clock = setInterval(()=> {
	console.log('tick', ticks++);
	if (ticks == 10){
		clearInterval(clock);
		console.log('stop');
	}
}, 1000);


// TODO: Set Interval 1 or the other.
let imgAutoScroll = setInterval(()=> {
	fadeOutSlide(+1);
}, 4000);

targetImage.addEventListener('mouseenter',()=>{
	clearInterval(imgAutoScroll);
});

targetImage.addEventListener('mouseleave', ()=> {
	imgAutoScroll = setInterval(()=>{
		fadeOutSlide(+1);
	}, 4000);
});

// TODO: Clear Timeout (add cancel timeout.)