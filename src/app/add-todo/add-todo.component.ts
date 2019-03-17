import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CRUDService } from '../card-container/service/crud.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  todo: string = "";
  @Output()  updateViewEmitter = new EventEmitter<string>(); 

  constructor(private cardContService: CRUDService) { }

  ngOnInit() {
  }


  addTodo(input: string): void {
    if (this.todo.length != 0) {
      this.cardContService.addTodo(input);
      this.todo = "";
      this.updateViewEmitter.emit(input);
    }
  }



}
