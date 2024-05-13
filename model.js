class Task {
    constructor(description) {
        this.description = description;
    }
}

class AdvancedTask extends Task {
    constructor(description, category) {
        super(description);
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

    addTask(task) {
        this.tasks.push(task);
    }

    static getInstance() {
        if (!TaskManager.instance) {
            TaskManager.instance = new TaskManager();
        }
        return TaskManager.instance;
    }
}

