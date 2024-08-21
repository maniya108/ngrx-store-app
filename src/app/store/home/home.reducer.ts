import { createReducer, on } from '@ngrx/store';
import { aDecrement, aIncrement, aReset } from './home.action';

export interface ICounterState {
  counter: number;
  name: string;
  lastName: string;
}

export const counterFeatureName = 'counterState';

export const initialState: ICounterState = { counter: 0, name: 'Mani', lastName: 'D' };

export const homeReducer = createReducer(
  initialState,
  on(aIncrement, (state) => ({ ...state, counter: state.counter + 1 })),
  on(aDecrement, (state) => ({
    ...state,
    counter: state.counter <= 0 ? 0 : state.counter - 1,
  })),
  on(aReset, (state) => ({ ...state, counter: 0 }))
);
