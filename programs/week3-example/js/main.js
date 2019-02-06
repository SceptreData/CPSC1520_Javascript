// Selecting all of the elements that we're going to use.
var displayDiv = document.querySelector("div.feature-display");

var featureImage = document.querySelector("img.feature");
var treesLink = document.querySelector("#more-trees-info");

var counterLink = document.querySelector(".link-count-clicks");
var counterArea = document.querySelector(".click-counter");

var imageConvertLink = document.querySelector("#image-converter");
var myCatsPicture = document.querySelector(".my-cats-image");

let catPath = "img/cute_cats.png";
let treePath = "img/oak_tree.jpg";

// featureImg.src = catPath;

let isCats = false;
function convertCats(event){
    event.preventDefault();
    if (isCats){
        featureImage.src = treePath;
        isCats = false;
    } else {
        featureImage.src = catPath;
        isCats = true;
    }
}

featureImage.style.width = '450px';
imageConvertLink.addEventListener('click', convertCats);

var totalClicks = 0;
counterLink.addEventListener('click', event => {
    event.preventDefault();
    totalClicks++;
    counterArea.innerHTML = totalClicks;
});