export function filterTasksBy(propertyName, value) {
  const tasks = this.all();
  return tasks.filter((item) => item[propertyName] === value);
}
