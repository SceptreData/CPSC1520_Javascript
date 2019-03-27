/*
  Add the required JavaScript to handle form submit and add a new todo item to 
  the page (in the div.todo-list element).  You will need to use a counter to 
  uniquely identify each todo item and use only DOM API functions to interact
  with the document (i.e. create each todo item), DO NOT use innerHTML for this
  exercise.
*/

// required vars
var todos = document.querySelector('.todo-list');
var todoCount = 0;

// todo form submit handler, adds a new todo item to the 'list'
document.querySelector('.todo-frm').addEventListener('submit', function (evt) {
	
	var div,
		checkbox,
		label,
		labelText,
		todoText;

	todoText = evt.target.elements['todo-item'].value;

	// adding a todo regardless, so might as well increment now...
	todoCount += 1;
	
	if (todoText === '') {
		todoText = 'Todo ' + (todoCount);
	}

	// create required elements
	div = document.createElement('div');
	checkbox = document.createElement('input');
	label = document.createElement('label');
	labelText = document.createTextNode(todoText);

	let up = document.createTextNode('\u21e7');
	let dn = document.createTextNode('\u21e9');

	// Create Arrows
	let upArrow = document.createElement('span');
	let downArrow = document.createElement('span');

	upArrow.classList.add('arrow', 'up');
	downArrow.classList.add('arrow', 'dn');

	upArrow.appendChild(up);
	downArrow.appendChild(dn);

	// set appropriate attributes
	checkbox.setAttribute('type', 'checkbox');
	checkbox.setAttribute('id', 'todo-' + todoCount);
	label.setAttribute('for', 'todo-' + todoCount);
	label.setAttribute('contenteditable', '');

	// build document fragment
	label.appendChild(labelText);
	div.appendChild(checkbox);
	div.appendChild(label);
	div.appendChild(upArrow);
	div.appendChild(downArrow);

	// add the document fragment to the document for rendering
	todos.appendChild(div);

	// clear the form
	evt.target.reset();

	evt.preventDefault();
});

todos.addEventListener('click', e => {
	let targetTodo = e.target.parentNode;
	let todoList = targetTodo.parentNode;
	let siblingTodo;

	if (e.target.classList.contains('arrow')){

		if (e.target.classList.contains('dn')) {
			siblingTodo = targetTodo.nextElementSibling;
			todoList.insertBefore(siblingTodo, targetTodo);
		}
		else if (e.target.classList.contains('up')){
			siblingTodo = targetTodo.previousElementSibling;
			todoList.insertBefore(targetTodo, siblingTodo);
		}
	}
});