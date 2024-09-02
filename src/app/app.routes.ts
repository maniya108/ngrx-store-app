import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { todoFeatureName, todoReducers } from './store/todo/todo.reducer';
import { provideEffects } from '@ngrx/effects';
import * as todoEffects from './store/todo/todo.effect';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component'),
    title: 'Login',
  },
  {
    path: 'todo',
    loadComponent: () => import('./pages/todo/todo.component'),
    title: 'Todo',
    providers: [
      provideState(todoFeatureName, todoReducers),
      provideEffects([todoEffects]),
    ],
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component'),
    title: 'Home',
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
