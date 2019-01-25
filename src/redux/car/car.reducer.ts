import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Car } from './car.model';
import { CarActionsUnion, CarActionTypes } from './car.actions';

export interface State extends EntityState<Car> {
  // additional entities state properties
  selectedCarId: number | null;
}

export const adapter: EntityAdapter<Car> = createEntityAdapter<Car>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedCarId: null,
});

export function CarsReducer(state = initialState, action: CarActionsUnion): State {
  switch (action.type) {

    case CarActionTypes.MAP_CARS: {
      return adapter.map(action.payload.entityMap, state);
    }

    case CarActionTypes.LOAD_CARS: {
      return adapter.addAll(action.payload.cars, state);
    }

    default: {
      return state;
    }
  }
}
