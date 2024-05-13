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
        const category = document.getElementById('category-input').value;
        const taskText = input.value.trim();
        if (taskText !== '') {
            taskManager.addTask(taskText, category);
            input.value = '';
            displayTasks(taskManager.tasks);
        }
    });
}

