import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Load Calendly widget script
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }
}
