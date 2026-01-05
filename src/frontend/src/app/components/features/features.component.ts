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
      title: 'Mind-Body Connection',
      description: 'Experience the profound link between physical movement and mental clarity through guided therapeutic boxing sessions.',
      icon: 'brain'
    },
    {
      title: 'Science-Backed Methods',
      description: 'Our approach combines modern neuroscience with time-tested boxing techniques for optimal mental wellness.',
      icon: 'flask'
    },
    {
      title: 'Natural Sanctuary',
      description: 'Train in a space designed to ground you—where every element reflects the calming presence of nature.',
      icon: 'leaf'
    }
  ];
}
