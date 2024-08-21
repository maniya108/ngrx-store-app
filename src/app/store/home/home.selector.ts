import { createFeatureSelector, createSelector } from '@ngrx/store';
import { counterFeatureName, ICounterState } from './home.reducer';

export const counterFeature =
  createFeatureSelector<ICounterState>(counterFeatureName);

export const selectFeatureCount = createSelector(
  counterFeature,
  (state) => state.counter
);
