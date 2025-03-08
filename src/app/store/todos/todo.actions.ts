import { createAction, props } from '@ngrx/store';
import { Todo } from '../../todo/todo.model';

export const addTodo = createAction(
  '[Todo] Add Todo',
  props<{ content: string }>()
);

export const removeTodo = createAction(
  '[Todo] Remove Todo',
  props<{ id: string }>()
);

export const loadTodos = createAction('[Todo] Load Todos');

export const loadTodosSuccess = createAction(
  '[Todo] Todo Load Success',
  props<{ todos: Todo[] }>()
);

export const loadTodosFailure = createAction(
  '[Todo API] Todo Load Failure',
  props<{ error: string }>()
);
