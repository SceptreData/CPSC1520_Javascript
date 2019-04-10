// get the button.
var outputTodo = document.querySelector(".output");
var completeToggleButton = document.querySelector(".complete");

// object literal representing a todo item
var todo = {
  description: "Get coffee",
  completed: false,
  toggleButtonText: "Complete",
  toggle: () => {
    if (this.completed) {
      this.completed = false;
      this.toggleButtonText = "completed";
      console.log(this.toggleButtonText);
    } else {
      this.completed = true;
      this.toggleButtonText = "undo";
      console.log(this.toggleButtonText);
    }
  }
};

// Display the items

outputTodo.innerHTML = todo.description;
completeToggleButton.innerText = todo.toggleButtonText;

completeToggleButton.addEventListener("click", function(event) {
  // change the method using a toggle.
  // add the hidden class if its' complete
  // set the inner text of the toggle button.
  //show the object so that we can
  todo.toggle();
  outputTodo.classList.toggle("hidden");
  console.log(todo.toggleButtonText);
  this.innerText = todo.toggleButtonText;
});
