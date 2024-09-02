import { createFeatureSelector, createSelector } from '@ngrx/store';
import { todoFeatureName, TodoState } from './todo.reducer';

export const counterFeature = createFeatureSelector<TodoState>(todoFeatureName);

export const isLoading = createSelector(
  counterFeature,
  (state) => state.isLoading
);
export const todoList = createSelector(
  counterFeature,
  (state) => state.todoList
);
export const error = createSelector(counterFeature, (state) => state.error);
