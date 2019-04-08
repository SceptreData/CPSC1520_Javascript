// this is an example using the newer fetch api
// to enable this comment out <script src="js/main-old.js"></script>
// and uncomment <script src="js/main-new.js"></script>

console.log("loaded the fetch api way of making asynchronous requests");

var button = document.querySelector('.button');
var output = document.querySelector('.output');
var puppyImage = document.querySelector('.random-puppy-image');

var randomDogUrl = "https://dog.ceo/api/breeds/image/random";

button.addEventListener("click", function(event){
	//prevent the event from happening
	event.preventDefault();
	fetch(randomDogUrl)
	.then(response => response.json())
	.then(obj => changeDogImage(obj.message));
});

function changeDogImage(image_string) {
	puppyImage.classList.remove("hidden");
	puppyImage.src = image_string;
}

// documentation is here for the api.
// https://dog.ceo/dog-api/