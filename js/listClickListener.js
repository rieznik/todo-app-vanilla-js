const list = document.querySelector('#list');

export const listClickListener = (cb) => {
  list.addEventListener('click', (event) => {
    const id = Number(event.target.closest('li').id);

    if (event.target.classList.contains('remove')) {
      cb(id, 'remove');
    }

    if (event.target.classList.contains('checkbox')) {
      cb(id, 'check');
    }
  });
};
