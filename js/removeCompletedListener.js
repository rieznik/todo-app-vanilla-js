const removeCompletedElem = document.getElementById('remove-completed');

export const removeCompletedListener = (cb) => {
  removeCompletedElem.addEventListener('click', () => cb());
};
