console.log("Using Fetch API");

// this will only work if you have a webserver serving these files
// the reason is that fetch uses http.
// You can use you VScode to do this (open browser 127.0.0.1:<your-port>)
// If you don't have vs code you can use this. 
// Webserver for chrome: (link here https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb/related?hl=en)
// Then start it and choose the folder of that index.html is in.
// open your browser and go to http://127.0.0.1:8887

var button = document.querySelector('.button');
var output = document.querySelector('.output');
const randomDog =  "https://dog.ceo/api/breeds/image/random";
const img = document.querySelector('img');

button.addEventListener('click', function (evt) {
	// don't reload the page
	evt.preventDefault();

	const path = evt.target.href;
	ajaxCall(path);
	// fetch(randomDog, {method: "GET"})
	// .then(response=> {
	// 	console.log(response.status);
	// 	return response.json();
	// }).then(dogObj=> {
	// 	console.log(dogObj);
	// 	img.src = dogObj.message;
	// })

});

function ajaxCall(path){
	fetch(path).then(response=> {
		console.log(response.status);
		return response.text();
	})
	.then(txt => {
		output.innerHTML = txt;
	})
}