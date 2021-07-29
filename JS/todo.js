const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('#todo-form input');
const todolist = document.querySelector('#todo-list');

const TODOS_KEY = 'toDos';

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintTodo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = newTodo;
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todolist.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = '';
  toDos.push(newTodo);
  paintTodo(newTodo);
  saveToDos();
}

todoForm.addEventListener('submit', handleTodoSubmit);

const savedListTodos = localStorage.getItem(TODOS_KEY);

if (savedListTodos !== null) {
  const parsedToDos = JSON.parse(savedListTodos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
