const todoButton = document.querySelector('.todo_add'),
todoList = document.querySelector('.todo_list'),
todoInput = document.querySelector('.todo_input');

const todoValidation = () => {
    console.log(typeof(todoInput.value), todoInput);
    if (todoInput.value.replace(/\s/g, '') == "") {
        todoInput.value = "";
        return
    } else {
        new todoAdd(todoInput.value)
        todoInput.value = ""
    }
}

class todoAdd {
    constructor (text) {
        let elementLi = document.createElement('li');
        elementLi.classList.add('todo_element');
        elementLi.textContent = text;
        todoList.append(elementLi);
    }
}

todoButton.addEventListener('click', todoValidation)