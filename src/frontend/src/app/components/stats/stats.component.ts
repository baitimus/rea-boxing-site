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
      label: 'Trainings',
      description: 'Therapeutische Sitzungen durchgeführt'
    },
    {
      value: '95%',
      label: 'Fühlen Sich Besser',
      description: 'Berichten von verbesserter mentaler Klarheit'
    },
    {
      value: '10+',
      label: 'Jahre Erfahrung',
      description: 'In therapeutischer Bewegung'
    },
    {
      value: '100%',
      label: 'Individuell',
      description: 'Jede Sitzung auf dich zugeschnitten'
    }
  ];
}
