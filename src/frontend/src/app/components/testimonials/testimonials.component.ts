import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Julia S.',
      role: 'Personal Training Kundin',
      text: 'Mind Movement hat mein Leben verändert. Nach Jahren mit Angststörungen habe ich durch Reah\'s therapeutisches Boxen endlich einen Weg gefunden, meine Emotionen zu kanalisieren. Jede Session ist wie eine Therapie für Körper und Geist.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80'
    },
    {
      name: 'Michael K.',
      role: 'Workshop Teilnehmer',
      text: 'Als Führungskraft war ich ständig gestresst. Der Workshop "Stressmanagement durch Bewegung" hat mir Werkzeuge gegeben, die ich täglich nutze. Professionell, einfühlsam und absolut empfehlenswert.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80'
    },
    {
      name: 'Sarah L.',
      role: 'Gruppentraining',
      text: 'Die Community bei Mind Movement ist einzigartig. Man fühlt sich sofort willkommen und verstanden. Das Training ist herausfordernd, aber nie überfordernd. Ich freue mich jede Woche auf die Sessions!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&q=80'
    },
    {
      name: 'Thomas B.',
      role: 'Personal Training Kunde',
      text: 'Nach einem Burnout suchte ich nach einem Weg zurück zu mir selbst. Reah hat mich mit Geduld und Fachwissen begleitet. Heute bin ich nicht nur körperlich stärker, sondern auch mental ausgeglichener.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80'
    }
  ];
}