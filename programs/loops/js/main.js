let destinations = document.querySelector('.destinations');

// while (confirm('Enter Destination?')){
//     destinationDisplay.innerHTML += `<p>${prompt("Destination:")}</p>`;
// }

destinations.innerHTML = '<ol></ol>';

destList = document.querySelector('ol');

let numDest = 0; // Init counter
while(numDest < 3){
    destList.innerHTML += '<li></li>';
    numDest++;
}
