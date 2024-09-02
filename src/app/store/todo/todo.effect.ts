import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoService } from './todo.service';
import {
  loadAllTodo,
  loadAllTodoFailure,
  loadAllTodoSuccess,
} from './todo.action';
import { catchError, map, of, switchMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export const todoEffects = createEffect(
  (actions$ = inject(Actions), todoService = inject(TodoService)) =>
    actions$.pipe(
      ofType(loadAllTodo),
      switchMap(() =>
        todoService.getAllTodo().pipe(
          map((todoList) => {
            console.log(todoList);
            return loadAllTodoSuccess({ todoList });
          }),
          catchError((errRes: HttpErrorResponse) => {
            return of(loadAllTodoFailure({ error: errRes.message }));
          })
        )
      )
    ),
  { functional: true }
);
