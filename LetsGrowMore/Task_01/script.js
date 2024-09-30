function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const newTodo = document.createElement('li');
        newTodo.className = 'todo-item';
        newTodo.innerHTML = `<span>${todoText}</span><span class="remove" onclick="removeTodo(this)">&times;</span>`;
        todoList.appendChild(newTodo);
        todoInput.value = '';
    }
}

function removeTodo(element) {
    const todoItem = element.parentElement;
    todoItem.remove();
}
