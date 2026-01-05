import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {
  stats = [
    {
      value: '500+',
      label: 'Sessions Guided',
      description: 'Therapeutic journeys completed'
    },
    {
      value: '95%',
      label: 'Feel Better',
      description: 'Report improved mental clarity'
    },
    {
      value: '10+',
      label: 'Years Experience',
      description: 'In therapeutic movement'
    },
    {
      value: '100%',
      label: 'Personalized',
      description: 'Every session tailored to you'
    }
  ];
}
