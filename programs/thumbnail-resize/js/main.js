// When a gallery thumbnail size button is clicked, the corresponding size class
// should be added to the div.thumbnails element.  This will apply the corresponding
// CSS rule to  modify the display the of hte thumbnail images.  In addition to this,
// the clicked button should be made active (i.e. add the active class).

let smallBtn = document.querySelector('.thumbnails-sm');
let mediumBtn = document.querySelector('.thumbnails-md');
let largeBtn = document.querySelector('.thumbnails-lg');

let pictures = document.querySelector('.thumbnails');

function resizeThumbnail(event){
    let target = event.target;
    let isActive = target.classList.contains('active');
    if (!isActive){
        let activeElt = document.querySelector('li.active');
        activeElt.classList.remove('active');

        target.classList.add('active');

        if (target.classList.contains('thumbnails-lg')){
            pictures.classList = "thumbnails lg";
        } else if (target.classList.contains('thumbnails-md')){
            pictures.classList = "thumbnails md";
        } else {
            pictures.classList = "thumbnails sm";
        }
    }
}

smallBtn.addEventListener('click', resizeThumbnail);
mediumBtn.addEventListener('click', resizeThumbnail);
largeBtn.addEventListener('click', resizeThumbnail);