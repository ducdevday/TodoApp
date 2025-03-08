import { createReducer, on } from '@ngrx/store';
import {
  addTodo,
  loadTodosFailure,
  loadTodos,
  loadTodosSuccess,
  removeTodo,
} from './todo.actions';
import { Todo } from '../../todo/todo.model';

export interface TodoState {
  todos: Todo[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: TodoState = {
  todos: [],
  error: '',
  status: 'pending',
};

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { content }) => ({
    ...state,
    todos: [...state.todos, { id: Date.now().toString(), content: content }],
  })),
  on(removeTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  })),
  on(loadTodos, (state) => ({
    ...state,
    status: 'loading' as const,
  })),
  on(loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos: todos,
    error: '',
    status: 'success' as const,
  })),
  on(loadTodosFailure, (state, { error }) => ({
    ...state,
    todos: [],
    error: error,
    status: 'error' as const,
  }))
);
