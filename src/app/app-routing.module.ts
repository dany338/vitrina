import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const routes: Routes = [
  {
    path: 'vitrina',
    loadChildren: './vitrina/vitrina.module#VitrinaModule',
    data: { preload: true }
  },
  {
    path: '',
    redirectTo: 'vitrina',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true, // <-- debugging purposes only
      preloadingStrategy: SelectivePreloadingStrategyService// PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
