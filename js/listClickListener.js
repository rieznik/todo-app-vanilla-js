const list = document.querySelector('#list');

export const listClickListener = (cb) => {
  list.addEventListener('click', (event) => {
    if ('index' in event.target.dataset) {
      cb(Number(event.target.dataset.index));
    }
  });
};
