export const byName = (text) => (task) =>
  task.name.toUpperCase().includes(text.toUpperCase());
