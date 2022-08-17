import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  todos:Todo[] | undefined;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos=this.todoService.GetTodos();

  }

  AddTodo(todoText: HTMLInputElement){

    const obj ={
      text:todoText.value,
      createdAt: new Date()
    };
   
    this.todoService.AddToDo(obj);
    todoText.value="";
  }

  RemoveTodo(todo:Todo) {
  this.todoService.RemoveToDo(todo);
  }

}
