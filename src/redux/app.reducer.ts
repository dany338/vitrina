import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import { CarsReducer, State } from './car/car.reducer';
import { Car } from './car/car.model';

export interface AppState {
  cars: State;
}

export const rootReducer: ActionReducerMap<AppState> = {
  cars: CarsReducer
};

export const selectCarState = createFeatureSelector<State>('cars');
