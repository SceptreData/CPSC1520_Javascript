let featureLink = document.querySelector(".feature.link");

let hidden = true;

function featureLinkHandler(event) {
    let img = document.querySelector('img.feature');
    img.src = featureLink.href;
    if (hidden) {
        img.classList.remove('hidden');
        hidden = false;
    } else {
        img.classList.add('hidden');
        hidden = true;
    }
    event.preventDefault();
}


featureLink.addEventListener('click', featureLinkHandler);