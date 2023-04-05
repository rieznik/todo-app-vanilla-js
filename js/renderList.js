const listElement = document.querySelector('#list');

export const renderList = (tasksList) => {
  listElement.innerHTML = '';

  tasksList.forEach((task) => {
    const taskElement = document.createElement('li');
    taskElement.setAttribute('id', task.id);
    if (task.completed) taskElement.classList.add('completed');

    taskElement.innerHTML = `
        <div class="form-check">
          <label class="form-check-label">
            <input class="checkbox" type="checkbox" ${
              task.completed ? 'checked' : ''
            }>
            ${task.name}
            <i class="input-helper"></i>
          </label>
        </div>
        <a class="remove mdi mdi-close-circle-outline"></a>
    `;
    listElement.append(taskElement);
  });
};
