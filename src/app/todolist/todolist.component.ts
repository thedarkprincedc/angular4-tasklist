import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodomodifyComponent } from '../todomodify/todomodify.component';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  @Input() todos: Array<Todo>;
  @Input() todoModify: TodomodifyComponent;
  constructor() {

  }
  ngOnInit() {

  }
  onClickDelete(todo: Todo, event: Event): void {
    event.preventDefault();
    this.todos.forEach((value, index) => {
      if (todo.id === value.id) {
        todo.bShow = false;
      }
    });
  }
  onClickModify(todo: Todo, event: Event): void {
    event.preventDefault();
    this.todoModify.toggleVisibility();
    this.todoModify.setTodo(todo);
  }
}
