/*
1. Abstract out what we did last class.

2. We're going to be adding attributes

3. then we're going to be moving a selected div to the top.

*/


let items = document.querySelector('.items');
let addButton = document.querySelector('.add-item');
let resetButton = document.querySelector('.reset');
let switchButton = document.querySelector('.switch-two-items');

let count = 0;

addButton.addEventListener('click', ()=> {
  let textInNode = "div added, this is div #" + count;
  let newElt = document.createElement('div');
  let textNode = document.createTextNode(textInNode);

  newElt.appendChild(textNode);

  let checkInput = document.createElement('input');

  let uniqueId = 'unique-item-' + count;
  checkInput.setAttribute('id', uniqueId);
  checkInput.setAttribute('type', 'checkbox');

  textNode.remove();

  let labelForCheckInput = document.createElement('label');
  let labelText = document.createTextNode(textInNode);

  labelForCheckInput.appendChild(labelText);
  labelForCheckInput.setAttribute('for', uniqueId);
  labelForCheckInput.setAttribute('contenteditable', "");

  newElt.appendChild(checkInput);
  newElt.appendChild(labelForCheckInput);
  items.appendChild(newElt);
  count++;
});

console.log(typeof(items.children));
switchButton.addEventListener('click', e =>{
  for (let [idx, div] of [...items.children].entries()){
    console.log(idx);
    let curInput = div.children[0];
    console.log(curInput, curInput.checked);
    if (curInput.checked){
     moveToTop(idx) ;
    }
  }
});

function moveToTop(idx){
  console.log(idx);
  if (idx != undefined){
    items.insertBefore(items.children[idx], items.children[0]);
  }
}

resetButton.addEventListener('click', ()=>{
  items.innerHTML = '';
  count = 0;
});