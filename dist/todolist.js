const inputTodo = document.querySelector('.todo-value');
const btnAddTodo = document.querySelector('.add-todo');
const clearTodos = document.querySelector('.clear-todos');
const todoListElem = document.querySelector('.todoList');
let todos = JSON.parse(localStorage.getItem('todos')) || [];
const setTodoToLocalstorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
    return true;
};
btnAddTodo.addEventListener('click', () => doerAddTodo());
inputTodo.addEventListener('keydown', (event) => {
    if (event.code == 'Enter') {
        doerAddTodo();
    }
});
const doerAddTodo = () => {
    const newTodo = {
        id: crypto.randomUUID(),
        title: inputTodo.value,
    };
    todos.push(newTodo);
    addTodoFromDom(todos);
    setTodoToLocalstorage();
    inputTodo.value = '';
};
const addTodoFromDom = (todos) => {
    todoListElem.innerHTML = '';
    todos.forEach(todo => {
        todoListElem.insertAdjacentHTML('beforeend', `
        <li>
          ${todo.title}
          <span class="icon" onclick="removeTodo('${todo.id}')"
            >
              <i class="fas fa-trash"></i>
            </span>
        </li>
      `);
    });
};
const removeTodo = (idTodo) => {
    todos = todos.filter(todo => todo.id !== idTodo);
    addTodoFromDom(todos);
    setTodoToLocalstorage();
};
clearTodos.addEventListener('click', () => {
    inputTodo.focus();
    todos = [];
    todoListElem.innerHTML = '';
    setTodoToLocalstorage();
});
addTodoFromDom(todos);
//# sourceMappingURL=todolist.js.map