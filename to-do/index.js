let tasks = [];

   
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const task = {
        text: taskText,
        completed: false,
        timestamp: new Date()
    };

    tasks.push(task);
    taskInput.value = '';
    renderTasks();
}


function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}


function renderTasks() {
    const pendingTasksList = document.getElementById('pendingTasks');
    const completedTasksList = document.getElementById('completedTasks');
    pendingTasksList.innerHTML = '';
    completedTasksList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'task';
        if (task.completed) {
            li.className += ' completed';
        }

        li.textContent = task.text + ' - ' + task.timestamp.toLocaleString();
        
        const completeButton = document.createElement('button');
        completeButton.textContent = task.completed ? 'Undo' : 'Complete';
        completeButton.onclick = () => toggleComplete(index);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTask(index);

        li.appendChild(completeButton);
        li.appendChild(deleteButton);

        if (task.completed) {
            completedTasksList.appendChild(li);
        } else {
            pendingTasksList.appendChild(li);
        }
    });
}


renderTasks();