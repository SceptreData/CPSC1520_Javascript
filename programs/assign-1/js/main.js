/*
    The Meme Generator

    David Bergeron
    david.f.bergeron@gmail.com
    ------------------------------*/

let memeFiles = [
    "fry-meme.png",
    "one-does-not-simply-meme.png",
    "most-interesting-man-meme.png"
];

const imgElt = document.querySelector('.meme-display img');
const topText = document.querySelector('.top-text');
const bottomText = document.querySelector('.bottom-text');

const theForm = document.querySelector('.meme-form');

function getMeme(idx){
    return 'img/' + memeFiles[idx];
}

 imgElt.src = getMeme(2);
// setTopText("Hello!");
// setBottomText("This is not a test.");
// Set top text from form

// Get bottom text from form

function setImage(memeIdx){
    imgElt.src = getMeme(memeIdx);
}

function setTopText(str){
    topText.innerHTML = str;
}

function setBottomText(str){
    bottomText.innerHTML = str;
}
theForm.addEventListener('submit', event=> {
    console.log(theForm.elements[1].selectedIndex);
    console.log(theForm.elements[0].value);
    setTopText(theForm.elements[1].value);
    setBottomText(theForm.elements[2].value);
    event.preventDefault();
});