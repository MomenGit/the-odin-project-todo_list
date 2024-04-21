export class Storage {
  static save_collection(key, collection) {
    localStorage.setItem(key, JSON.stringify(collection));
  }

  static retrieve_collection(key) {
    let collection = JSON.parse(localStorage.getItem(key));
    if (!Array.isArray(collection)) {
      collection = [];
    }
    return collection;
  }

  static save_new(obj, key) {
    const collection = this.retrieve_collection(key);
    collection.push(obj);
    this.save_collection(key, collection);
  }
}
