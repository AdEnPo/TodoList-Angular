import {Component, OnInit, Input} from '@angular/core';
import {Todo} from '../../class/todo';
import {TodoService} from '../../service/todo.service';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input()
  public todo: Todo;

  constructor(private toService: TodoService) {
  }

  ngOnInit() {

  }

  private removeTodo(): void {
    this.toService.removeTodo(this.todo.id);
  }


}
