console.log("Using XMLHttpRequest");

// this will only work if you have a webserver serving these files
// the reason is that fetch uses http.
// You can use you VScode to do this (open browser 127.0.0.1:<your-port>)
// If you don't have vs code you can use this. 
// Webserver for chrome: (link here https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb/related?hl=en)
// Then start it and choose the folder of that index.html is in.
// open your browser and go to http://127.0.0.1:8887

var xhr = new XMLHttpRequest();
var button = document.querySelector('.button');
var output = document.querySelector('.output');
let randomDog =  "https://dog.ceo/api/breeds/image/random";
const img = document.querySelector('img');

button.addEventListener('click', function (evt) {
	// don't reload the page
	evt.preventDefault();
	xhr.open('GET', randomDog, true);
	xhr.send(null);
	xhr.addEventListener('load', ()=> {
		if (xhr.status == 200){
			let imgSrc = JSON.parse(xhr.responseText).message;
			 img.src = imgSrc;
		}
	});
});

