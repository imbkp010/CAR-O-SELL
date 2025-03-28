import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarOSellComponent } from './components/car-o-sell/car-o-sell.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'cars', component: CarOSellComponent },
  { path: 'car/:id', component: CarDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
