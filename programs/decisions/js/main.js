let featureLink = document.querySelector('a.feature');
let featureImage = document.querySelector('img.feature');

var current = "View Barcelona";
var next = "Hide Barcelona";

function featureLinkHandler(evt) {
        featureImage.src = featureLink.href;
        featureImage.classList.toggle('hidden');
        featureLink.innerHTML = next;

        // Swap value of current and Next.
        [current, next] = [next, current];
        evt.preventDefault();
}
featureLink.addEventListener('click', featureLinkHandler);