import {Component} from '@angular/core';
import {TodoService} from './service/todo.service';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private todoService: TodoService) {
  }
}
