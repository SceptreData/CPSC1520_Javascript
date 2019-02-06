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

/* The Elements we want to Control. */
const imgElt = document.querySelector('.meme-display img');
const topText = document.querySelector('.top-text');
const bottomText = document.querySelector('.bottom-text');

/* The ugly list of errors */
const errorList = document.querySelector('.error');

/* Build a path string for our meme files */
function getMemePath(idx){
    return 'img/' + memeFiles[idx - 1];
}

function setImage(memeIdx, altStr){
    if (memeIdx > 0){
        imgElt.src = getMemePath(memeIdx);
        imgElt.alt = altStr;
    } else {
        imgElt.src = placeHolder;
        imgElt.alt = 'Placeholder Image'
    }
}


function setTopText(str){
    topText.innerHTML = str;
}

function setBottomText(str){
    bottomText.innerHTML = str;
}

function addError(err){
    errorList.innerHTML += "<li>Error: " + err + "</li>";
}

function clearErrors(){
    errorList.innerHTML  = '';
}

function isEmptyOrWhiteSpace(str){
    return !str || !str.trim();
}


theForm.addEventListener('submit', event=> {
    let meme = theForm.elements[0];
    let memeIdx = meme.selectedIndex;

    // Build our Meme String with a regex (ooooh)
    let memeStr = meme.value.replace('/-/g', ' ');

    let topStr = theForm.elements[1].value;
    let botStr = theForm.elements[2].value;

    let isValid = true;

    if (memeIdx == 0) {
        addError("Must select a meme image.");
        setImage(0);
        isValid = false;
    }

    if (isEmptyOrWhiteSpace(topStr)) {
        addError("Top Text cannot be empty");
        isValid = false;
    }

    if (isEmptyOrWhiteSpace(botStr)){
        addError("Bottom Text cannot be empty");
        isValid = false;
    }

    if (isValid){
        setImage(memeIdx, memeStr);
        setTopText(theForm.elements[1].value);
        setBottomText(theForm.elements[2].value);
    }
    event.preventDefault();
});

theForm.addEventListener('reset', event=>{
    setImage(0);
    setTopText('');
    setBottomText('');
    clearErrors();
});