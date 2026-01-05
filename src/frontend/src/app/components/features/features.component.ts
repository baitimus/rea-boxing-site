import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  trainings = [
    {
      type: 'Personal Training',
      tagline: 'Individuell & Intensiv',
      description: 'Deine persönliche Transformation mit massgeschneidertem Coaching.',
      duration: '60 Minuten',
      price: 'Ab CHF 120',
      whoFor: 'Für alle, die maximale Aufmerksamkeit und individuelles Coaching suchen',
      includes: [
        'Persönlicher Trainingsplan',
        'Eins-zu-eins Betreuung',
        'Flexible Terminplanung',
        'Fokus auf deine Ziele'
      ],
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&h=400&fit=crop&q=80',
      highlight: true
    },
    {
      type: 'Gruppentraining',
      tagline: 'Gemeinsam Stark',
      description: 'Energie und Motivation in einer kleinen, unterstützenden Gruppe.',
      duration: '90 Minuten',
      price: 'Ab CHF 45',
      whoFor: 'Für alle, die die Energie einer Gruppe schätzen und neue Leute kennenlernen möchten',
      includes: [
        'Max. 8 Teilnehmer',
        'Strukturiertes Programm',
        'Community-Feeling',
        'Regelmässige Kurse'
      ],
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop&q=80',
      highlight: false
    },
    {
      type: 'Workshop',
      tagline: 'Intensiv-Erlebnis',
      description: 'Tiefgreifende Techniken in kompakter Form für nachhaltige Veränderung.',
      duration: '3 Stunden',
      price: 'Ab CHF 180',
      whoFor: 'Für alle, die tiefer eintauchen und spezifische Themen intensiv bearbeiten möchten',
      includes: [
        'Fokus auf ein Thema',
        'Theorie & Praxis',
        'Ausführliche Unterlagen',
        'Kleine Gruppen'
      ],
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop&q=80',
      highlight: false
    }
  ];

  scrollToCenter(event: Event) {
    const card = event.currentTarget as HTMLElement;
    card.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }
}
