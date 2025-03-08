import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAllTodos, selectStatus } from '../store/todos/todo.selectors';
import { AppState } from '../store/app.state';
import {
  addTodo,
  loadTodos as loadTodos,
  removeTodo,
} from '../store/todos/todo.actions';
import { Todo } from './todo.model';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  public allTodos$: Observable<Todo[]> = this.store.select(selectAllTodos);
  public status$: Observable<string> = this.store.select(selectStatus);
  public todo = '';
  constructor(private store: Store<AppState>, private toastr: ToastrService) {}

  ngOnInit() {
    this.store.dispatch(loadTodos());
    this.status$.subscribe((status) => {
      console.log(status);
      if (status === 'success') {
        this.toastr.success('Thành công', 'Todo đã được cập nhật');
      } else if (status === 'error') {
        this.toastr.error('Lỗi!', 'Có lỗi xảy ra, vui lòng thử lại.');
      }
    });
  }

  handleAddTodo() {
    this.store.dispatch(addTodo({ content: this.todo }));
    this.todo = '';
  }

  handleRemoveTodo(todo: Todo) {
    this.store.dispatch(removeTodo({ id: todo.id }));
  }
}
