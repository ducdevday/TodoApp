import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { TodoState } from './todo.reducer';

export const selectTodoState = (state: AppState) => state.todoState;
export const selectAllTodos = createSelector(
  selectTodoState,
  (state: TodoState) => state.todos
);
export const selectStatus = createSelector(
  selectTodoState,
  (state: TodoState) => state.status
);
