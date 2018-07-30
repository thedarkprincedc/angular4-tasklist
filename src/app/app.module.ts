import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoinputComponent } from './todoinput/todoinput.component';
import { FormsModule } from '@angular/forms';
import { TodomodifyComponent } from './todomodify/todomodify.component';
@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoinputComponent,
    TodomodifyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
