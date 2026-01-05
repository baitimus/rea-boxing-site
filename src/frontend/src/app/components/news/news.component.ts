import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  newsItems = [
    {
      title: 'Neue Workshop-Serie startet im Februar',
      date: '15. Januar 2026',
      excerpt: 'Entdecke unsere neue Workshop-Serie zum Thema "Stressmanagement durch Bewegung". Limitierte Plätze verfügbar.',
      category: 'Workshop',
      isNew: true
    },
    {
      title: 'Erweiterte Öffnungszeiten',
      date: '8. Januar 2026',
      excerpt: 'Ab sofort bieten wir auch Abendkurse bis 21:00 Uhr an. Perfekt für Berufstätige.',
      category: 'Info',
      isNew: true
    },
    {
      title: 'Erfolgsgeschichte: Martins Reise',
      date: '3. Januar 2026',
      excerpt: 'Lies, wie Martin durch therapeutisches Boxen seine Angststörung überwunden hat.',
      category: 'Story',
      isNew: false
    }
  ];

  dismissNews() {
    // Logic to hide news banner
  }
}