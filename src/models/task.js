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
}
