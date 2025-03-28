import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarOSellComponent } from './components/car-o-sell/car-o-sell.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    CarOSellComponent,
    CarDetailComponent,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
