import { createReducer, on } from '@ngrx/store';
import { TodoModel } from './todo.model';
import {
  loadAllTodo,
  loadAllTodoFailure,
  loadAllTodoSuccess,
} from './todo.action';

export interface TodoState {
  isLoading: boolean;
  todoList: TodoModel[];
  error: string;
}

export const todoFeatureName = 'todoState';

export const initialState: TodoState = {
  isLoading: false,
  todoList: [],
  error: '',
};

export const todoReducers = createReducer(
  initialState,
  on(loadAllTodo, (state) => ({ ...state, isLoading: true })),
  on(loadAllTodoSuccess, (state, { todoList }) => ({
    ...state,
    isLoading: false,
    todoList,
  })),
  on(loadAllTodoFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);
