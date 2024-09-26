document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value;
        if (taskText.trim() !== '') {
            const li = document.createElement('li');
            li.innerText = taskText;
            taskList.appendChild(li);
            taskInput.value = '';
            li.addEventListener('click', function() {
                this.remove();
            });
        }
    });
});
