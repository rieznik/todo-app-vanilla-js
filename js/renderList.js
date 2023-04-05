const listElement = document.querySelector('#list');

export const renderList = (tasksList) => {
  listElement.innerHTML = '';

  tasksList.forEach((task, index) => {
    const taskElement = document.createElement('li');
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
        <a class="remove mdi mdi-close-circle-outline" data-index="${index}"></a>
    `;
    listElement.append(taskElement);
  });
};
