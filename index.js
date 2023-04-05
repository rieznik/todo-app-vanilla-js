import { renderList } from './js/renderList.js';
import { formListener } from './js/formListener.js';
import { saveList, loadList } from './js/ls.js';
import { listClickListener } from './js/listClickListener.js';
import { formChangeListener } from './js/formChangeListener.js';
import { byName } from './js/filters.js';

// Done ✅
// Create a new task
// by clicking on the button
// by pressing enter
// Delete a task
// Search tasks by name

// TODO 🔲
// Mark a task as completed (1/2)
// Delete all completed tasks
// Filter tasks by completed and uncompleted (different lists)

// Save data to localStorage

const startApp = () => {
  const tasksList = loadList();

  renderList(tasksList);

  const updateList = () => {
    saveList(tasksList);
    renderList(tasksList);
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
      tasksList.splice(
        tasksList.findIndex((task) => task.id !== id),
        1
      );
      updateList();
    }

    if (action === 'check') {
      const clickedTask = tasksList.find((task) => task.id === id);
      clickedTask.completed = !clickedTask.completed;
      updateList();
    }
  });

  formChangeListener((text) => {
    const filteredTasks = tasksList.filter(byName(text));
    renderList(filteredTasks);
  });
};

document.addEventListener('DOMContentLoaded', startApp);
