// this is an example using the newer fetch api
// to enable this comment out <script src="js/main-new.js"></script>
// and uncomment <script src="js/main-old.js"></script>

console.log("loaded the XMLHttpRequest way of making asynchronous requests");

var xhr = new XMLHttpRequest();
var button = document.querySelector('.button');
var output = document.querySelector('.output');
var puppyImage = document.querySelector('.random-puppy-image');
var randomDogUrl = "https://dog.ceo/api/breeds/image/random";


button.addEventListener('click', function (evt) {
	// prevent the page from going to data.html
	evt.preventDefault();
	let xhr = new XMLHttpRequest();
	xhr.open('GET', randomDogUrl, true);
	xhr.send(null);
	xhr.addEventListener('load', handleResponse);
});


function changeDogImage(image_string) {
	puppyImage.classList.remove("hidden");
	puppyImage.src = image_string;
}

// documentation is here for the api.
// https://dog.ceo/dog-api/