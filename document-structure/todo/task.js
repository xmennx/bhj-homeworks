document.addEventListener('DOMContentLoaded', () => {
    const tasksForm = document.getElementById('tasks__form');
    const taskInput = document.getElementById('task__input');
    const tasksList = document.getElementById('tasks__list');

    tasksForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (taskInput.value.trim() !== '') {
            const task = document.createElement('div');
            task.className = 'task';
            task.innerHTML = `
                <div class="task__title">${taskInput.value}</div>
                <a href="#" class="task__remove">&times;</a>
            `;

            task.querySelector('.task__remove').addEventListener('click', function(event) {
                event.preventDefault();
                tasksList.removeChild(task);
            });

            tasksList.appendChild(task);
            taskInput.value = '';
        }
    });
});
