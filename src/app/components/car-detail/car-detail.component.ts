import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-detail',
  imports: [CommonModule],
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  car?: Car;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCar();
  }

  getCar(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.carService.getCar(id).subscribe(car => {
      this.car = car;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
