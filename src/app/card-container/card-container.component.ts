import { Component, OnInit } from '@angular/core';
import { CRUDService } from './service/crud.service';
import { TitleGeneratorService } from './service/title-generator.service';
import { Todo } from '../shared/model/todo';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss'],
  providers: [CRUDService, TitleGeneratorService]
})
export class CardContainerComponent implements OnInit {

  todos: Array<Todo>;
  text: string;
  clock: number;

  constructor(private crudService: CRUDService, private titleGeneratorService: TitleGeneratorService) { }

  ngOnInit() {
    this.loadTodos();
    this.text = this.titleGeneratorService.buildText();

    setInterval(() => {
      this.clock = Date.now();
    }, 1000);
    // console.log(this.todos);
  }

  loadTodos() {
    this.todos = this.crudService.loadTodo();
  }

  //fast add
  addNewTaskToView(input: string): void {
    // this.todos.push({ 'text': input, 'done': false });
    this.todos.push(new Todo(input, false));
  }

  completeTodo(event, index: number) {
    console.log("Completed task:" + index);
    this.crudService.completeTodo(index);
    this.loadTodos();
  }

  removeTodo(index: number) {
    this.crudService.removeTodo(index);
    this.todos.splice(index, 1);
  }

  deleteCompleted(): void{
    let uncompletedTask = this.todos.filter(v => v.done == false);
    this.todos = uncompletedTask;
    this.crudService.writeOnLocalStorage(uncompletedTask);
  }

  getTodoNotCompleted(): number {
    let uncompletedTask: number = this.todos.filter(v => v.done == false).length;
    return uncompletedTask;
  }

  getTodoCompleted():number {
    let completedTask: number = this.todos.filter(v => v.done == true).length;
    return completedTask;
  }

}
