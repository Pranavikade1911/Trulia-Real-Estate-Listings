import { Component } from '@angular/core';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrl: './rent.component.css'
})
export class RentComponent {
  properties = [
    { price: '$1000', bed: 2, bath: 2, sqft: 1506, address: '3276 Lema Dr, Springhill, FL 34609', image: 'assets/images/img7.jpg' },
    { price: '$2500', bed: 4, bath: 3, sqft: 2500, address: '3276 Lema Dr, Springhill, FL 34609', image: 'assets/images/img8.jpg' },
    { price: '$1200', bed: 5, bath: 3, sqft: 2000, address: '3276 Lema Dr, Springhill, FL 34609', image: 'assets/images/img9.jpg' },
    { price: '$2200', bed: 3, bath: 3, sqft: 1116, address: '3276 Lema Dr, Springhill, FL 34609', image: 'assets/images/img10.jpg' },
    { price: '$2500', bed: 4, bath: 3, sqft: 1200, address: '3276 Lema Dr, Springhill, FL 34609', image: 'assets/images/img11.jpg' },
    { price: '$1800', bed: 3, bath: 2, sqft: 1487, address: '3276 Lema Dr, Springhill, FL 34609', image: 'assets/images/img12.jpg' },
  ];

  constructor() { }
}
