import {Injectable} from '@angular/core';
import {Todo} from '../class/todo';

@Injectable()
export class TodoService {
  private todos: Todo[];
  private nextId: number;

  constructor() {
    let todos = this.getTodos();
    this.todos = [
      new Todo(0, 'sadfs'),
      new Todo(1, 'sadfsbn'),
      new Todo(2, 'sadfasds'),
      new Todo(3, 'fsşdafkjflkkj dsaf skdajfal kj jşdsfş ksdjfakdjfkj şsala s6d54fds1 2 5ds5a4f6 54s654d6af54 46454s af654sda 2sf4 4s4dfa4 654ds a654f65 dd46sa d54f65 46sda54f3 asdf sdasdfşidfşas, idşf, 54654if')
    ];

    this.nextId = 4;
  }

  public addTodo(text: string): void {
    let todo = new Todo(this.nextId, text);
    this.todos.push(todo);
    this.nextId++;
  }

  public getTodos(): Todo[] {
    return this.todos;
  }

  public removeTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

}
