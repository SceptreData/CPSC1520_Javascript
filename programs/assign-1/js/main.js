/*
The Meme Generator

David Bergeron
david.f.bergeron@gmail.com
------------------------------*/

const placeHolder = document.querySelector('img').src;
const memeFiles = [
    "fry-meme.png",
    "one-does-not-simply-meme.png",
    "most-interesting-man-meme.png"
];


/* The FORM */
const theForm = document.querySelector('.meme-form');

/* The Elements we want to control. */
const imgElt = document.querySelector('.meme-display img');
const topText = document.querySelector('.top-text');
const bottomText = document.querySelector('.bottom-text');

/* The ugly list of errors */
const errorList = document.querySelector('.error');


/* Build a path string for our meme files */
function getMemePath(idx) {
    return 'img/' + memeFiles[idx - 1];
}

/* Set our Meme Image*/
function setImage(memeIdx, altStr) {
    /* If our Meme is the placeholder */
    if (memeIdx === 0) {
        imgElt.src = placeHolder;
    /* Otherwise, set the appropriate meme */
    } else {
        imgElt.src = getMemePath(memeIdx);
    }
    imgElt.alt = altStr;
}

function setTopText(str) {
    topText.innerHTML = str;
}

function setBottomText(str) {
    bottomText.innerHTML = str;
}

function addError(err) {
    errorList.innerHTML += "<li>Error: " + err + "</li>";
}

function clearErrors() {
    errorList.innerHTML = '';
}

function isEmptyOrWhiteSpace(str) {
    return !str || !str.trim();
}


/* Change our Meme Image whenever a new drop down is selected. */
theForm.addEventListener('change', event => {
    let meme = theForm.elements[0];
    let memeIdx = meme.selectedIndex;

    if (memeIdx === 0) {
        setImage(0, 'Placeholder Image');
    } else {
        // Use a regex to replace dashes with spaces
        let memeStr = meme.value.replace(/-/g, ' ');
        setImage(memeIdx, memeStr);
    }
});

/* Generate the text for our Meme and check for errors */
theForm.addEventListener('submit', event => {
    clearErrors();

    let topStr = theForm.elements[1].value;
    let botStr = theForm.elements[2].value;

    let isValid = true;

    if (isEmptyOrWhiteSpace(topStr)) {
        addError("Top Text cannot be empty");
        isValid = false;
    }

    if (isEmptyOrWhiteSpace(botStr)) {
        addError("Bottom Text cannot be empty");
        isValid = false;
    }

    if (isValid) {
        setTopText(theForm.elements[1].value);
        setBottomText(theForm.elements[2].value);
        clearErrors();
    }
    event.preventDefault();
});

/* Reset our forms */
theForm.addEventListener('reset', event => {
    setImage(0);
    setTopText('');
    setBottomText('');
    clearErrors();
});