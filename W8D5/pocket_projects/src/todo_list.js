

let todos = [];

let ul = document.querySelectorAll(".todos")[0];

let form = document.querySelectorAll(".add-todo-form")[0];

// function addTodo (e) {





const addTodo = (e) => {
    e.preventDefault();
    let input = document.getElementsByName("add-todo")[0];
    let todo = {done: 'false', value: input.value }
    todos.push(todo);
    input.value = "";
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    populateList();
    localStorage.setItem('ourTodos', JSON.stringify(todos));
    // ul.appendChild(label);
    e.currentTarget.reset();
}

function populateList () {
    let prevToDos = localStorage.getItem('ourTodos');
    storedToDos = JSON.parse(prevToDos);
    storedToDos.forEach( el => {
        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.setAttribute('type', 'checkbox');
       
        let label = document.createElement("label");
        label.innerHTML = el.value;
    
        if (el.done === true) {
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }

        li.appendChild(checkbox);
        li.appendChild(label);
        ul.appendChild(li);
    })
   
}






form.addEventListener("submit", addTodo); 
// form.addEventListener("submit", populateList); 


//< input type = "checkbox" name = "vehicle3" value = "Boat" checked > I have a boat<br>