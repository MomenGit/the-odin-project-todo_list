import { Storage } from './storage';

export class Base {
  static collectionName = '';
  constructor(collectionName) {
    Base.collectionName = collectionName;
    this.id = crypto.randomUUID();
    this.createdAt = Date.now();
    this.updatedAt = Date.now();
  }

  static collectionName = '';

  save() {
    Storage.save_new(this, Base.collectionName);
  }
  static all() {
    return Storage.retrieve_collection(Base.collectionName);
  }
  static get(id) {
    return this.all(Base.collectionName).filter((item) => item.id === id)[0];
  }
}
