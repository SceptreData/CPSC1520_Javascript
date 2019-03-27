/*
  Add the required JavaScript to handle form submit and add a new todo item to 
  the page (in the div.todo-list element).  You will need to use a counter to 
  uniquely identify each todo item and use only DOM API functions to interact
  with the document (i.e. create each todo item), DO NOT use innerHTML for this
  exercise.
*/
const form = document.querySelector('form');
const input = document.querySelector('#todo-item')
const todoList = document.querySelector('.todo-list');

let count = 1;
input.focus();

form.addEventListener('submit', e => {
  e.preventDefault();

  let todoElt = document.createElement('div');

  let checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  todoElt.appendChild(checkbox);

  let label = document.createElement('label');
  let todoTxt = input.value;
  if (todoTxt != ''){
    let txtNode = document.createTextNode(todoTxt);
    label.setAttribute('for', `todo-${count}`);
    label.appendChild(txtNode);
    label.setAttribute('contenteditable', '');
    todoElt.appendChild(label);

    todoList.appendChild(todoElt);
    count++;
  }

  input.value = '';
});