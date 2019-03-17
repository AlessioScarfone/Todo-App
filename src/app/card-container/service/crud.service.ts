import { Injectable } from '@angular/core';
import { Todo } from '../../shared/model/todo';

@Injectable()
export class CRUDService {

  private ARRAY_NAME = 'todo-app';

  constructor() { }

  loadTodo(): Array<Todo> {
    console.log("Load Todo");
    let todoAppJson = localStorage.getItem(this.ARRAY_NAME);
    if (!todoAppJson) {
      this.writeOnLocalStorage([]);
      // todoAppJson = JSON.stringify([]);
      // localStorage.setItem(this.ARRAY_NAME,todoAppJson); 
    }
    // console.log(this.getArrayFromLocalStorage());
    return this.getArrayFromLocalStorage();
  }

  addTodo(value: string): void {
    let todoAppJson = this.getArrayFromLocalStorage();
    // todoAppJson.data.push({ 'text': value, 'done': false });
    todoAppJson.push(new Todo(value, false));
    // console.log("new json to add:");
    // console.log(todoAppJson);
    this.writeOnLocalStorage(todoAppJson);
  }

  removeTodo(index: number): void {
    let values = this.getArrayFromLocalStorage();
    values.splice(index, 1);
    this.writeOnLocalStorage(values);
  }

  completeTodo(index: number): void {
    let values = this.getArrayFromLocalStorage();
    values[index].done = !values[index].done;
    this.writeOnLocalStorage(values);
  }

  writeOnLocalStorage(todoAppJson: Array<Todo>): void {
    let newValues: string = JSON.stringify({ "data": todoAppJson });
    localStorage.setItem(this.ARRAY_NAME, newValues);
  }

  private getArrayFromLocalStorage(): Array<Todo> {
    let json = JSON.parse(localStorage.getItem(this.ARRAY_NAME));
    let todos = [];
    json.data.forEach(element => {
      // console.log(element);
      todos.push(new Todo(element.text, element.done));
    });
    // console.log(todos);
    return todos;
  }

}
