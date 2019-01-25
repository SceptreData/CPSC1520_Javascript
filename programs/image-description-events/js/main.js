let featureLink = document.querySelector('.feature.link');
let featureImg = document.querySelector('img.feature');
let featureTitle = document.querySelector('p.feature.title');

function featureLinkHandler(event) {
    event.preventDefault();
    featureImg.src = featureLink.href;

    // Update ALT text of img.feature
    featureImg.alt = featureLink.title;

    // Display our image of Barcelona
    featureImg.classList.toggle('hidden');
}

featureLink.addEventListener('click', featureLinkHandler);

featureImg.addEventListener('mouseover', function() {
    featureTitle.innerHTML = featureImg.alt;
});

featureImg.addEventListener('mouseout', function() {
    featureTitle.innerHTML = ' ';
});