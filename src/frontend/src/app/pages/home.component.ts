import { Component } from '@angular/core';
import { NewsComponent } from '../components/news/news.component';
import { HeroComponent } from '../components/hero/hero.component';
import { FeaturesComponent } from '../components/features/features.component';
import { CtaComponent } from '../components/cta/cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NewsComponent, HeroComponent, FeaturesComponent, CtaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
