import { Action } from '@ngrx/store';
import { EntityMap } from '@ngrx/entity';

import { Car } from './car.model';

export enum CarActionTypes {
  LOAD_CARS = '[Car] Load Cars',
  MAP_CARS = '[Car] Map Cars',
}

export class LoadCars implements Action {
  readonly type = CarActionTypes.LOAD_CARS;

  constructor(public payload: { cars: Car[] }) {}
}

export class MapCars implements Action {
  readonly type = CarActionTypes.MAP_CARS;

  constructor(public payload: { entityMap: EntityMap<Car> }) {}
}

export type CarActionsUnion =
  | LoadCars
  | MapCars;
