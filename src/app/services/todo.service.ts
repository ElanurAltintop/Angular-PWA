import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [ 
    {
      text : "Yapılacak 1",
      createdAt : new Date()
    },
    {
      text : "Yapılacak 2",
      createdAt : new Date()
    }
    
  ];

  constructor() { }
  GetTodos()
  {
    return this.todos;
  }


 AddToDo(obj:any) {

  this.todos.push(obj);
 }
 RemoveToDo(todo:Todo){
  const index =this.todos.indexOf(todo);
  this.todos.splice(index,1);
 }

}
