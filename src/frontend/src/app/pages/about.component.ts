import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TestimonialsComponent } from '../components/testimonials/testimonials.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, TestimonialsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  trainer = {
    name: 'Reah',
    title: 'Gründer & Haupttrainer',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&h=800&fit=crop&q=80',
    bio: 'Mit über 15 Jahren Erfahrung in therapeutischem Boxen und mentaler Gesundheit habe ich Mind Movement gegründet, um Menschen auf ihrer Reise zu innerer Stärke zu begleiten. Meine Mission ist es, einen sicheren Raum zu schaffen, in dem Bewegung zur Sprache des Geistes wird.',
    story: 'Nach Jahren als Profi-Boxer erkannte ich die transformative Kraft des Boxens nicht nur für den Körper, sondern auch für den Geist. Diese Erkenntnis führte mich zur Sportpsychologie und letztendlich zur Gründung von Mind Movement – einem Ort, wo therapeutisches Boxen Menschen hilft, ihre mentalen Grenzen zu überwinden.',
    qualifications: [
      'Zertifizierter Box-Trainer (Swiss Olympic)',
      'Diplom in Sportpsychologie',
      'Achtsamkeits-Coach (MBSR)',
      'Traumasensibles Training',
      'NLP Master Practitioner'
    ],
    specialties: ['Personal Training', 'Workshop-Leitung', 'Stressmanagement', 'Mentales Coaching']
  };
}