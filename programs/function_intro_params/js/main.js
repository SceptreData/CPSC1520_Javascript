/*
	Demo project showing how to create and call a function.
*/

function displayGreeting() {
	let name;
	name = prompt('Enter your name');
	let element = document.querySelector('.person-name');
	element.innerHTML = "<b>" + name + "</b>";
}

displayGreeting();
window.addEventListener("click")

// NOTE: you must call the function from within the console

/*
// The following demonstrates a function
// definition

var displayGreeting = function () {
	var name;
	name = prompt('Enter your name');
	var element = document.querySelector('.something');
	element.innerHTML = "<b>" + name + "</b>";
};

displayGreeting();

// es6 'fat arrow' notation
var displayGreeting = () => {
    var name;
	name = prompt('Enter your name');
	var element = document.querySelector('.something');
	element.innerHTML = "<b>" + name + "</b>";};

displayGreeting();

// can also use let for block scoping
var displayGreeting = () => {
	var name;
	name = prompt('Enter your name');
	var element = document.querySelector('.something');
	element.innerHTML = "<b>" + name + "</b>";};

displayGreeting();

*/