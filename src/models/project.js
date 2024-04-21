import { Base } from './baseModel';

export default class Project extends Base {
  constructor(title, description = '') {
    super('projects');
    this.title = title;
    this.description = description;
  }
}
