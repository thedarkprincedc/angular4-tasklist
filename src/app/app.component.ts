import { Component, Input } from '@angular/core';
import { Todo } from './todo';
import { TodomodifyComponent } from './todomodify/todomodify.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() todomodify: TodomodifyComponent;
  title = 'todo-angular-app';
  todolists: Array<Todo> = [];
}
