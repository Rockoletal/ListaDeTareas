const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if (!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState);
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
    task.appendChild(addDeleteBtn()); // Agregar el botón de eliminar
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
};

const deleteTask = event => {
    const task = event.target.parentElement;
    tasksContainer.removeChild(task);
};

const addDeleteBtn = () => {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('deleteTaskButton');
    deleteButton.addEventListener('click', deleteTask);
    return deleteButton;
};
