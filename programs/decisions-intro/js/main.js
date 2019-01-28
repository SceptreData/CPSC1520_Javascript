// 1. select the target element
var featureImage = document.querySelector('img.feature');

// 2. create the event listener function
function handleFeatureClick() {
	var desc = document.querySelector('p.feature.description');

	// remove the hidden class IF it is present,
	// otherwise, add it back!
	// if (desc.classList.contains('hidden'))
	// 	desc.classList.remove('hidden');
	// else
	// 	desc.classList.add('hidden');

	console.log(desc.classList);
	console.log(desc.className);
	// achieve the same result using string functions
	var idx = desc.className.indexOf('hidden');
	console.log(idx);

	var cheeseIdx = desc.className.indexOf('cheese');
	if (idx >= 0){
		desc.classList.remove('hidden');
	} else {
		desc.classList.add('hidden');
	}
}

// 3. add event listener
featureImage.addEventListener('click', handleFeatureClick);