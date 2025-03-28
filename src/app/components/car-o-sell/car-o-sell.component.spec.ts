import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOSellComponent } from './car-o-sell.component';

describe('CarOSellComponent', () => {
  let component: CarOSellComponent;
  let fixture: ComponentFixture<CarOSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarOSellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarOSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
