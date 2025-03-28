import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-o-sell',
  imports: [CommonModule],
  templateUrl: './car-o-sell.component.html',
  styleUrls: ['./car-o-sell.component.css'],
})
export class CarOSellComponent implements OnInit, OnDestroy {
  cars: Car[] = [];
  currentIndex = 0;
  autoPlaySubscription?: Subscription;
  touchStartX = 0;
  touchEndX = 0;

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit(): void {
    this.loadCars();
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  loadCars(): void {
    this.carService.getCars().subscribe((cars) => {
      this.cars = cars;
    });
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.cars.length;
  }

  prevSlide(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.cars.length) % this.cars.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  viewDetails(carId: number): void {
    this.router.navigate(['/car', carId]);
  }

  startAutoPlay(): void {
    this.autoPlaySubscription = interval(5000).subscribe(() => {
      this.nextSlide();
    });
  }

  stopAutoPlay(): void {
    if (this.autoPlaySubscription) {
      this.autoPlaySubscription.unsubscribe();
    }
  }

  onMouseEnter(): void {
    this.stopAutoPlay();
  }

  onMouseLeave(): void {
    this.startAutoPlay();
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].clientX;
    this.handleSwipe();
  }

  handleSwipe(): void {
    const swipeThreshold = 50;
    if (this.touchEndX < this.touchStartX - swipeThreshold) {
      // Swipe left, go to next slide
      this.nextSlide();
    } else if (this.touchEndX > this.touchStartX + swipeThreshold) {
      // Swipe right, go to previous slide
      this.prevSlide();
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') {
      this.prevSlide();
    } else if (event.key === 'ArrowRight') {
      this.nextSlide();
    }
  }
}
