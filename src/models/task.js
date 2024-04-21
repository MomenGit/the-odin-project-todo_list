import { Base } from './baseModel';

export default class Task extends Base {
  constructor(
    title,
    description = '',
    dueDate = null,
    startDate = null,
    priority = 0,
    project_id = null,
    notes = '',
  ) {
    super('tasks');
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project_id = project_id;
    this.notes = notes;
    this.isDone = false;
  }

  static tasksByDueDate(date) {
    const tasks = this.all();
    return tasks.filter((item) => item.dueDate === date);
  }

  static tasksByProject(project_id) {
    const tasks = this.all();
    return tasks.filter((item) => item.project_id === project_id);
  }

  static tasksByPriority(priority) {
    const tasks = this.all();
    return tasks.filter((item) => item.priority === priority);
  }
}
