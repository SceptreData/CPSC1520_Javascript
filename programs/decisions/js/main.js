let featureLink = document.querySelector('a.feature');
featureImage = document.querySelector('img.feature');

function featureLinkHandler(evt) {
    if (featureLink.innerHTML === "View Barcelona") {
        featureImage.src = featureLink.href;
        featureImage.classList.remove('hidden');
        featureLink.innerHTML = "Hide Barcelona";
    } else {
        featureImage.src = '';
        featureImage.classList.add('hidden');
        featureLink.innerHTML = "View Barcelona";
    }
    evt.preventDefault();
}
featureLink.addEventListener('click', featureLinkHandler);