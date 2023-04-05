const input = document.querySelector('#input-text');

export const formChangeListener = (cb) => {
  input.addEventListener('keyup', () => {
    cb(input.value);
  });
};
