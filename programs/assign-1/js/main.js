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

console.log(placeHolder);

const imgElt = document.querySelector('.meme-display img');
const topText = document.querySelector('.top-text');
const bottomText = document.querySelector('.bottom-text');

const theForm = document.querySelector('.meme-form');

function getMemePath(idx){
    return 'img/' + memeFiles[idx - 1];
}

function setImage(memeIdx){
    if (memeIdx > 0){
        imgElt.src = getMemePath(memeIdx);
    } else {
        imgElt.src = placeHolder;
    }
}

function isEmptyOrWhiteSpace(str){
    return !str || !str.trim();
}

function setTopText(str){
    topText.innerHTML = str;
}

function setBottomText(str){
    bottomText.innerHTML = str;
}
theForm.addEventListener('submit', event=> {
    let memeIdx = theForm.elements[0].selectedIndex;
    setImage(memeIdx);

    let topStr = theForm.elements[1].value;
    let botStr = theForm.elements[2].value;

    if (isEmptyOrWhiteSpace(topStr)) {
        Error("Type stuff dumbass");
    }
    setTopText(theForm.elements[1].value);
    setBottomText(theForm.elements[2].value);
    event.preventDefault();
});

theForm.addEventListener('reset', event=>{
    setImage(0);
    setTopText('');
    setBottomText('');
});