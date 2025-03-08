import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private storageKey = 'todos';

  constructor() {}

  async getTodos(): Promise<Todo[]> {
    const todos = localStorage.getItem(this.storageKey);
    return todos ? JSON.parse(todos) : [];
  }

  async saveTodos(todos: Todo[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(todos));
  }
}
