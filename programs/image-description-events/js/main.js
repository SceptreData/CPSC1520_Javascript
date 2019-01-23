let featureLink = document.querySelector(".feature.link");

function featureLinkHandler(event) {
    let img = document.querySelector('img.feature');
    img.src = featureLink.href;
    img.classList.toggle('hidden');
    event.preventDefault();
}

featureLink.addEventListener('click', featureLinkHandler);