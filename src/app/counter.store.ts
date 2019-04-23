import { Action } from '@ngrx/store';
import { ActionTypes } from './counter.actions';

export interface AppState {
  counter: number;
}

export const INITIAL_STATE: AppState = {
  counter: 0
}

export function counterReducer (state: AppState = INITIAL_STATE, action: Action): AppState {
  switch (action.type) {
    case ActionTypes.Increment:
      state.counter++;
      return {...state};
    case ActionTypes.Decrement:
      state.counter--;
      return {...state};
    case ActionTypes.Reset:
      state.counter = 0;
      return {...state};
    default:
      return {...state};  
  }
}

