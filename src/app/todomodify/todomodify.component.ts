import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todomodify',
  templateUrl: './todomodify.component.html',
  styleUrls: ['./todomodify.component.css']
})
export class TodomodifyComponent implements OnInit {
  f: Todo;
  isVisible: boolean;
  constructor() { }

  ngOnInit() {
    this.isVisible = false;
  }
  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
  setTodo(todo: Todo) {
    this.f = todo;
  }
  onClickModify(todo: Todo, event: Event) {
    event.preventDefault();
  }
}
