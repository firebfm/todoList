// Code goes here

/*
var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function() {
    console.log('My todos are ', this.todos);
  },
  addTodo function(todo){
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo function(position, newValue){
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo function(position){
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};
*/
var todoList = {
  todos: [],
  displayTodos: function(){
    if (this.todos.length === 0)
      console.log('Your list is empty.')
    else {
      console.log('My Todos:')
      for (var i = 0; i < this.todos.length; i++){
        if (this.todos[i].completed == true)
          console.log('(x)', this.todos[i].todoText);
        else
          console.log('()', this.todos[i].todoText);
      }
    }
  },
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) { 
    this.todos[position].todoText = todoText; 
    this.displayTodos();
  },
  deleteTodo: function(position) { 
    this.todos.splice(position, 1); 
    this. displayTodos();
  },
  toggleCompleted: function(position){
    var todo = this.todos[position]; 
    todo.completed = !todo.completed; 
    this. displayTodos();
  },
  toggleAll: function() { 
    var totalTodos = this.todos.length;
    var completedTodos = 0; 
    
    // Get number of completed todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed == true)
        completedTodos++;
    }
    // Case 1: If everything is true, make all false
    if (completedTodos == totalTodos){
      for (var x = 0; x < totalTodos; x++)
        this.todos[x].completed = false;
    }
    // make everything true
    else {
      for (var y = 0; y < totalTodos; y++)
        this.todos[y].completed = true;
    }
    this.displayTodos();
  }
};

/*
// display button
let displayButton = document.getElementById('displayButton');
let toggleAllButton = document.getElementById('toggleAllButton');
// run displayTodos method when clicked
displayButton.addEventListener('click', function(){
  todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function(){
   todoList.toggleAll(); 
});
*/

let handlers = {
    displayTodos: function(){
        todoList.displayTodos();
    },
    toggleAll: function(){
        todoList.toggleAll();
    },
    addTodo: function(){
        let addTextInput = document.getElementById('addTextInput');
        todoList.addTodo(addTextInput.value);
        addTextInput.value = '';
    },
    changeTodo: function(){
        let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        let changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
    },
    deleteTodo: function(){
        let deletePositionInput = document.getElementById('deletePositionInput');
        todoList.deleteTodo(deletePositionInput.valueAsNumber);
        deletePositionInput.value = '';
    },
    toggleCompleted: function(){
        let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
    }
};