import { createAction } from '@ngrx/store';

export const aIncrement = createAction('[Home Component] Increment');

export const aDecrement = createAction('[Home Component]  Decrement');

export const aReset = createAction('[Home Component]  Reset Count');
