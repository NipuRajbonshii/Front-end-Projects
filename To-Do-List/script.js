

document.addEventListener("DOMContentLoaded", () => {
    const submit = document.getElementById("tasks");
    const input = document.getElementById("task");
    const addTask = document.getElementById("addedTask");


    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];


    tasks.forEach(task => renderTask(task));

    let taskName;

    submit.addEventListener("submit", event => {
        event.preventDefault();
        taskName = input.value.trim();
        if(taskName === ""){
            return;
        }
        else {
            taskAdder(taskName);
            input.value="";
        }
    });



    function taskAdder(name){
        const newTask = {
            id: Date.now(),
            name,
            completed: false,
        }


        renderTask(newTask)
        tasks.push(newTask);
        saveTask();
    }

    function renderTask(task){
        const liElem = document.createElement("li");
        liElem.setAttribute('data-id', task.id);
        liElem.innerHTML = `
        <span>${task.name}</span>
        <button>Delete</button>
        `;
        addTask.appendChild(liElem);

        if(task.completed === true){
            liElem.querySelector('span').classList.add('line-through')
        }   


        liElem.addEventListener("click", (e) => {
            if(e.target.tagName === 'BUTTON') return;
            e.stopPropagation();
            e.target.classList.toggle('line-through');
            task.completed = !task.completed;
            saveTask(); 
        })

        liElem.querySelector('button').addEventListener('click', (e) => {
            e.stopPropagation();
            tasks = tasks.filter(t => t.id !== task.id);
            liElem.remove();
            saveTask();
        });

    }


    function saveTask(){
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
})


