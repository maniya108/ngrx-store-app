import { createAction, props } from '@ngrx/store';
import { TodoModel } from './todo.model';

export const loadAllTodo = createAction("[Todo Component] Load All Todo's");

export const loadAllTodoSuccess = createAction(
  '[Todo Service] All Todo loaded successfully',
  props<{ todoList: TodoModel[] }>()
);

export const loadAllTodoFailure = createAction(
  '[Todo Service] All Todo loaded failed',
  props<{ error: string }>()
);
