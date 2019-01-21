import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VitrinaRoutingModule } from './vitrina-routing.module';
import { CarComponent } from './car/car.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarCompareComponent } from './car-compare/car-compare.component';

@NgModule({
  declarations: [CarComponent, CarListComponent, CarCompareComponent],
  imports: [
    CommonModule,
    VitrinaRoutingModule
  ]
})
export class VitrinaModule { }
