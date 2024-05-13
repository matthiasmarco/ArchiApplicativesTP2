class TaskRenderer {
    constructor(task) {
        this.task = task;
    }

    render() {
        const taskElement = document.createElement('div');
        taskElement.className = 'task ' + this.task.category;
        taskElement.textContent = this.task.description;
        return taskElement;
    }
}

function displayTasks(taskList) {
    const tasksContainer = document.getElementById('tasks-container');
    tasksContainer.innerHTML = '';

    taskList.forEach(task => {
        const renderer = new TaskRenderer(task);
        tasksContainer.appendChild(renderer.render());
    });
}

