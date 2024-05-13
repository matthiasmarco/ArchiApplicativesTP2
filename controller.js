document.addEventListener('DOMContentLoaded', () => {
    const taskManager = TaskManager.getInstance();
    setupTaskForm(taskManager);
    displayTasks(taskManager.tasks);
});

function setupTaskForm(taskManager) {
    const form = document.getElementById('task-form');
    form.addEventListener('submit', event => {
        event.preventDefault();
        const input = document.getElementById('task-input');
        const taskText = input.value.trim();
        if (taskText !== '') {
            const task = new Task(taskText); // Assuming default task creation
            taskManager.addTask(task);
            input.value = '';
            displayTasks(taskManager.tasks);
        }
    });
}
