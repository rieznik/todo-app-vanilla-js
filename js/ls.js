const LS_KEY = 'tasksList';

export const saveList = (tasksList) => {
  localStorage.setItem(LS_KEY, JSON.stringify(tasksList));
};

export const loadList = () => {
  const savedList = localStorage.getItem(LS_KEY);
  return savedList ? JSON.parse(savedList) : [];
};
