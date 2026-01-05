import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  features = [
    {
      title: 'Geist-Körper-Verbindung',
      description: 'Erlebe die tiefe Verbindung zwischen körperlicher Bewegung und mentaler Klarheit durch geführte therapeutische Box-Sitzungen.',
      icon: 'brain'
    },
    {
      title: 'Wissenschaftlich Fundiert',
      description: 'Unser Ansatz kombiniert moderne Neurowissenschaft mit bewährten Box-Techniken für optimales mentales Wohlbefinden.',
      icon: 'flask'
    },
    {
      title: 'Natürliches Refugium',
      description: 'Trainiere in einem Raum, der dich erdet – wo jedes Element die beruhigende Präsenz der Natur widerspiegelt.',
      icon: 'leaf'
    }
  ];
}
