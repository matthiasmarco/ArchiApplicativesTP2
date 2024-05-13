class TaskRenderer {
    render(task) {
        throw new Error('La méthode render doit être implémentée par les sous-classes.');
    }
}

class TaskListRenderer extends TaskRenderer {
    constructor(tasks) {
        super();
        this.tasks = tasks;
    }

    renderList() {
        const listElement = document.createElement('ul');

        this.tasks.forEach(task => {
            const taskElement = this.render(task);
            listElement.appendChild(taskElement);
        });

        return listElement;
    }

    render(task) {
        const taskElement = document.createElement('li');
        taskElement.className = 'task ' + task.category;
        taskElement.textContent = task.description;
        return taskElement;
    }
}

function displayTasks(taskList) {
    const tasksContainer = document.getElementById('tasks-container');
    tasksContainer.innerHTML = '';

    const renderer = new TaskListRenderer(taskList);
    tasksContainer.appendChild(renderer.renderList());
}

// Utilisation :
const taskList = ['travail','maison','divers'];
const listRenderer = new TaskListRenderer(taskList);
const tasksContainer = document.getElementById('tasks-container');
tasksContainer.appendChild(listRenderer.renderList());

