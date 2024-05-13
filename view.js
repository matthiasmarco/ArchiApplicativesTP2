class TaskRenderer {
    constructor(task) {
        if (this.constructor === TaskRenderer) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.task = task;
    }

    render() {
        throw new Error("Method 'render()' must be implemented.");
    }
}

class SimpleTaskRenderer extends TaskRenderer {
    render() {
        const taskElement = document.createElement('div');
        taskElement.textContent = this.task.description;
        return taskElement;
    }
}

class CategorizedTaskRenderer extends TaskRenderer {
    render() {
        const taskElement = document.createElement('div');
        taskElement.textContent = `${this.task.description} (${this.task.category})`;
        return taskElement;
    }
}

function displayTasks(taskList) {
    const tasksContainer = document.getElementById('tasks-container');
    tasksContainer.innerHTML = '';

    taskList.forEach(task => {
        let renderer;
        if (task instanceof AdvancedTask) {
            renderer = new CategorizedTaskRenderer(task);
        } else {
            renderer = new SimpleTaskRenderer(task);
        }
        tasksContainer.appendChild(renderer.render());
    });
}

