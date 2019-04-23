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
      return {counter: state.counter+1};
    case ActionTypes.Decrement:
      return {counter: state.counter-1};
    case ActionTypes.Reset:
      return {counter: 0};
    default:
      return {...state};  
  }
}

