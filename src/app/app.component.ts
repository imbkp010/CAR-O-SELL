import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarOSellComponent } from './components/car-o-sell/car-o-sell.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CarOSellComponent, CarDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
