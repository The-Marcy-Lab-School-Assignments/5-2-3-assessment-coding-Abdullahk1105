const { getId } = require('./utils');

class ToDoItem {
  constructor(description, priorityLevel, timeStart) {
    this.id = getId();
    this.description = description
    this.priorityLevel = priorityLevel
    this.isDone = false
    this.timeStart = timeStart
  }
  getDescription(){
    return `I still have to do ${this.description}.`
  }
}
// const item = new ToDoItem('broom', 10)
// console.log(item.getDescription())


class ToDoList {
  #list = []
  static #allLists = []
  constructor(name) {
    this.id = getId();
    this.name = name
    this.length = length
    ToDoList.#allLists.push(this)
  }
  createItem(description, priorityLevel, timeStart){
    const createdItem = new ToDoItem(description, priorityLevel, timeStart)
    this.#list.push(createdItem)
    return createdItem
  }
  getItems(){
    return [...this.#list]
  }
  getCompletedCount(){
    let done = 0 
    for (const item of this.#list) {
      if (item.isDone === true) {
        done += 1;
      }
    }
    return done
  }
  static list() {
    return [...ToDoList.#allLists];
  }

  static findBy(id){
    return this.#allLists.find((item) => item.id === id)
  }
  findListLength(){
    return this.#list.length
  }
}

module.exports = {
  ToDoItem,
  ToDoList
};