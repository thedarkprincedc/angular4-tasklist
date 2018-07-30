import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
@Component({
  selector: 'app-todoinput',
  templateUrl: './todoinput.component.html',
  styleUrls: ['./todoinput.component.css']
})

export class TodoinputComponent implements OnInit {
  todo: string;
  @Input() todos: Array<Todo>;
  constructor() { }
  ngOnInit() {
  }
  onClickAdd(todo: string): void {
    this.todos.push({
      id: this.todos.length + 1,
      name: todo
    });
    this.todo = '';
  }
}
