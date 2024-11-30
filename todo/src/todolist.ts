
const inputTodo = document.querySelector('.todo-value') as HTMLInputElement
const btnAddTodo = document.querySelector('.add-todo') as HTMLButtonElement
const clearTodos = document.querySelector('.clear-todos') as HTMLButtonElement
const todoListElem = document.querySelector('.todoList') as HTMLElement

interface Todo {
  id:string ,
  title:string ,
}

let todos:Todo[] = JSON.parse(localStorage.getItem('todos')) || [] ;

const setTodoToLocalstorage = () => {
  localStorage.setItem('todos', JSON.stringify(todos))
  return true
}

btnAddTodo.addEventListener('click', ()=> doerAddTodo())

inputTodo.addEventListener('keydown' , (event)=> {

  if(event.code == 'Enter'){
    doerAddTodo()
  }
  
})

const doerAddTodo = () => {

  const newTodo:Todo = {
    id:crypto.randomUUID() ,
    title:inputTodo.value ,
  }

  todos.push(newTodo)
  addTodoFromDom(todos)
  setTodoToLocalstorage()
  inputTodo.value = ''  

}

const addTodoFromDom = (todos:Todo[]) => {
  todoListElem.innerHTML = ''

  todos.forEach(todo => {


    todoListElem.insertAdjacentHTML('beforeend' , 
      `
        <li>
          ${todo.title}
          <span class="icon" onclick="removeTodo('${todo.id}')"
            >
              <i class="fas fa-trash"></i>
            </span>
        </li>
      `
    )


  })

  
}

const removeTodo = (idTodo:string) => {

  todos = todos.filter(todo => todo.id !== idTodo)
  addTodoFromDom(todos)
  setTodoToLocalstorage()
  
}

clearTodos.addEventListener('click',()=> {

  inputTodo.focus()

  todos = []
  todoListElem.innerHTML = ''
  setTodoToLocalstorage()

})

addTodoFromDom(todos)


