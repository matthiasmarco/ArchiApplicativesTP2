class Task {
    constructor(description, category) {
        this.description = description;
        this.category = category;
    }
}

class TaskManager {
    constructor() {
        if (TaskManager.instance) {
            return TaskManager.instance;
        }
        this.tasks = [];
        TaskManager.instance = this;
    }

    addTask(description, category) {
        const task = new Task(description, category);
        this.tasks.push(task);
    }

    static getInstance() {
        if (!TaskManager.instance) {
            TaskManager.instance = new TaskManager();
        }
        return TaskManager.instance;
    }
}

