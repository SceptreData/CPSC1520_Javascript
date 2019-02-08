// When the 'Add Tag' submit button is clicked, the p.feature.tags element should be 
// updated with the tag that was entered by the user.  Do not overwrite any existing tags,
// simply add each additional tag onto the already existing list.  A tag cannot be empty 
// (i.e. cannot be whitespace). If the user tries to add an empty tag, remove the hidden 
// class from the p.feature.error element.  If the form is submitted correctly, then ensure
// that the p.feature.error element is hidden.

const theForm = document.querySelector('form');

let errorElt = document.querySelector('.error');
let errorStr = '';

let hashTagElt = document.querySelector('.tags');
let hashTags = '';

theForm.addEventListener('submit', event=> {
    event.preventDefault();
    let inputElt = theForm.elements[0];
    let newTag = inputElt.value.trim();
    console.log(typeof(newTag));

    let isValid = true;
    if (newTag === ''){
        isValid = false;
        errorElt.classList.remove('hidden');
        errorElt.innerHTML = "String cannot be empty";
    } else if (newTag.includes(' ')){
        isValid = false;
        errorElt.classList.remove('hidden');
        errorElt.innerHTML = "String cannot have spaces!"
    } else {
        errorElt.classList.add('hidden');
    }

    if (isValid) {
        hashTags += '#' + newTag;
        hashTagElt.innerHTML = hashTags;
    }
});