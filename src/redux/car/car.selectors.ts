import { createSelector } from '@ngrx/store';
import { AppState } from './../app.reducer';
import { Car } from './car.model';

export const getState  = (state: AppState) => state;
export const getFilter = (state: AppState) => state.filter;
export const getCars  = (state: AppState) => state.cars;

export const getVisibleTodos = createSelector(
  getCars,
  getFilter,
  (cars: Car[], filter: string) => {
    switch (filter) {
      default:
      case 'SHOW_ALL':
        return cars;
      case 'SHOW_COMPLETED':
        return cars.filter(t => t.completed);
      case 'SHOW_ACTIVE':
        return cars.filter(t => !t.completed);
    }
  }
);

export const getStateCompleted = createSelector(getCars, (todos) => {
  return todos.every(car => car.);
});
