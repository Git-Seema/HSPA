import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.css'],
})
export class PropertyCardComponent {
  Property: any = {
    Id: 1,
    Name: 'Jeffs Place',
    Type: 'Flat',
    Price: 'R 5700',
  };
  Property2: any = {
    Id: 2,
    Name: 'Marks Place',
    Type: 'House',
    Price: 'R 1200000',
  };
}
