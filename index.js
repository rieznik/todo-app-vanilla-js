import { renderList } from './js/renderList.js';
import { formListener } from './js/formListener.js';
import { saveList, loadList } from './js/ls.js';
import { listClickListener } from './js/listClickListener.js';
import { formChangeListener } from './js/formChangeListener.js';
import { removeCompletedListener } from './js/removeCompletedListener.js';
import { byName } from './js/filters.js';

const startApp = () => {
  const tasksList = loadList();

  renderList(tasksList);

  const updateList = (list) => {
    saveList(list);
    renderList(list);
  };

  formListener((newTask) => {
    tasksList.push({
      id: new Date().getTime(),
      name: newTask,
      completed: false,
    });
    updateList(tasksList);
  });

  listClickListener((id, action) => {
    if (action === 'remove') {
      const filteredTasksList = tasksList.filter((task) => task.id !== id);
      updateList(filteredTasksList);
    }

    if (action === 'check') {
      const clickedTask = tasksList.find((task) => task.id === id);
      clickedTask.completed = !clickedTask.completed;
      updateList(tasksList);
    }
  });

  formChangeListener((text) => {
    const filteredTasks = tasksList.filter(byName(text));
    renderList(filteredTasks);
  });

  removeCompletedListener(() => {
    const filteredTasksList = tasksList.filter((task) => !task.completed);
    updateList(filteredTasksList);
  });
};

document.addEventListener('DOMContentLoaded', startApp);
