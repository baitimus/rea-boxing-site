import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { BookingComponent } from './pages/booking.component';
import { TermsComponent } from './pages/terms.component';
import { PrivacyComponent } from './pages/privacy.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'booking', component: BookingComponent },
	{ path: 'terms', component: TermsComponent },
	{ path: 'privacy', component: PrivacyComponent },
	{ path: '**', redirectTo: '' }
];
