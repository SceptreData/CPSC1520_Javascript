let output = document.querySelector('.output');

let list = "<ul>";

for (let i = 0; i < 10; i++){
	list += `<li>${i + 1}</li>`;
}

list += '</ul>';
output.innerHTML = list;

let arr = Array.from(document.querySelectorAll('li'));

for (let [idx, elt] of arr.entries()){
	if (idx % 2 == 0) {
		elt.classList.add('stripe');
	}
}
// var list = '<ul>';
// var count; // count the number of list items
// var items; // access to list items

// // add list items
// for (count = 0; count < 10; count = count + 1) {
// 	list = list + '<li>' + (count + 1) + '</li>';
// }

// list = list + '</ul>';

// // display the list
// output.innerHTML = list;

// items = document.querySelectorAll('li');

// /* `count += 1` is equivalent to `count = count + 1` */
// for (count = 0; count < items.length; count += 2) {
// 	items[count].classList.add('stripe');

// 	// less efficient solution; requires count += 1
// 	/*
// 	if (count % 2 === 0) {
// 		items[count].classList.add('stripe');
// 	}
// 	*/
// }
